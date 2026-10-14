(() => {
  "use strict";
  let enabled = false;
  let receivedUpdate = false;
  let interval = null;
  let pending = null;
  const observers = new Map();
  const mirrored = new Map();

  function restore(video, state) {
    // Do not overwrite a newer scale value written by the player.
    if (video.style.getPropertyValue("scale") !== state.applied ||
        video.style.getPropertyPriority("scale") !== "important") return;
    if (state.value) video.style.setProperty("scale", state.value, state.priority);
    else video.style.removeProperty("scale");
  }

  function mirror(video) {
    let state = mirrored.get(video);
    if (state && video.style.getPropertyValue("scale") === state.applied &&
        video.style.getPropertyPriority("scale") === "important") return;
    // Keep the current inline value, including changes made by the player.
    state = {
      value: video.style.getPropertyValue("scale"),
      priority: video.style.getPropertyPriority("scale"),
      applied: ""
    };
    const scale = getComputedStyle(video).scale;
    const parts = scale === "none" ? ["1", "1"] : scale.trim().split(/\s+/);
    const x = parts[0];
    const y = parts[1] || x;
    // Individual scale composes with transform; never transform the host or controls.
    video.style.setProperty("scale", `calc(-1 * ${x}) ${y}${parts[2] ? ` ${parts[2]}` : ""}`, "important");
    state.applied = video.style.getPropertyValue("scale");
    mirrored.set(video, state);
  }

  function schedule() {
    if (enabled && pending === null) {
      pending = setTimeout(() => { pending = null; scan(); }, 50);
    }
  }

  function scan() {
    if (!enabled) return;
    const roots = new Set();
    const videos = new Set();
    const visit = root => {
      roots.add(root);
      if (!observers.has(root)) {
        const observer = new MutationObserver(records => {
          if (records.some(record => record.type === "childList" ||
              record.target.localName === "video")) schedule();
        });
        observer.observe(root, root === document
          ? { subtree: true, childList: true }
          : { subtree: true, childList: true, attributes: true, attributeFilter: ["style"] });
        observers.set(root, observer);
      }
      for (const element of root.querySelectorAll("*")) {
        // Light DOM videos are deliberately excluded.
        if (root !== document && element.localName === "video") videos.add(element);
        if (element.shadowRoot) visit(element.shadowRoot);
      }
    };
    visit(document);
    for (const [root, observer] of observers) {
      if (!roots.has(root)) { observer.disconnect(); observers.delete(root); }
    }
    for (const [video, state] of mirrored) {
      if (!videos.has(video)) { restore(video, state); mirrored.delete(video); }
    }
    for (const video of videos) mirror(video);
  }

  function setEnabled(value) {
    value = Boolean(value);
    if (enabled === value) return;
    enabled = value;
    if (enabled) {
      scan();
      // attachShadow() on an existing host is invisible to MutationObserver.
      interval = setInterval(scan, 1000);
    } else {
      clearInterval(interval);
      clearTimeout(pending);
      interval = pending = null;
      for (const observer of observers.values()) observer.disconnect();
      observers.clear();
      for (const [video, state] of mirrored) restore(video, state);
      mirrored.clear();
    }
  }

  chrome.runtime.onMessage.addListener(message => {
    if (message?.type === "VK_MIRROR_SET") {
      receivedUpdate = true;
      setEnabled(message.enabled);
    }
  });
  chrome.runtime.sendMessage({ type: "VK_MIRROR_GET" }).then(response => {
    // A startup response must not overwrite a more recent click.
    if (!receivedUpdate) setEnabled(response?.enabled);
  }).catch(() => {});
  // Reconcile restored documents from the back/forward cache.
  addEventListener("pageshow", event => {
    if (!event.persisted) return;
    receivedUpdate = false;
    chrome.runtime.sendMessage({ type: "VK_MIRROR_GET" }).then(response => {
      if (!receivedUpdate) setEnabled(response?.enabled);
    }).catch(() => {});
  });
})();
