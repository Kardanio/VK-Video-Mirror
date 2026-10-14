"use strict";

// Serialize clicks and startup requests, including rapidly repeated clicks.
let queue = Promise.resolve();
function enqueue(task) {
  const result = queue.then(task);
  queue = result.catch(error => console.warn("VK mirror:", error));
  return result;
}
const keyFor = tabId => `mirror:${tabId}`;
async function readState(tabId) {
  const key = keyFor(tabId);
  return Boolean((await chrome.storage.session.get(key))[key]);
}
async function badge(tabId, enabled) {
  await chrome.action.setBadgeBackgroundColor({ tabId, color: "#0077FF" });
  await chrome.action.setBadgeText({ tabId, text: enabled ? "ON" : "" });
  await chrome.action.setTitle({ tabId, title: enabled
    ? "VK Видео: зеркало включено — нажмите, чтобы выключить"
    : "VK Видео: зеркало выключено — нажмите, чтобы включить" });
}

chrome.action.onClicked.addListener(tab => {
  if (tab.id === undefined) return;
  void enqueue(async () => {
    const enabled = !(await readState(tab.id));
    await chrome.storage.session.set({ [keyFor(tab.id)]: enabled });
    await badge(tab.id, enabled);
    // Broadcast to every matching frame. A player loaded later requests state itself.
    try {
      await chrome.tabs.sendMessage(tab.id, { type: "VK_MIRROR_SET", enabled });
    } catch {
      // No matching content script yet (or a non-VK page). State remains ready.
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message?.type !== "VK_MIRROR_GET" || sender.tab?.id === undefined) return;
  const tabId = sender.tab.id;
  enqueue(async () => {
    const enabled = await readState(tabId);
    await badge(tabId, enabled);
    respond({ enabled });
  }).catch(() => respond({ enabled: false }));
  return true;
});

chrome.tabs.onRemoved.addListener(tabId => {
  void enqueue(() => chrome.storage.session.remove(keyFor(tabId)));
});
