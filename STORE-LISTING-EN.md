# VK Video Mirror — English listing

Developer / publisher: **Kardanio**

Version: **1.0.0**

## Short description

Mirror VK videos horizontally with one click, keeping player controls unchanged. Developed by Kardanio.

## Full description

VK Video Mirror is a lightweight extension that flips videos horizontally on VK websites. Click its toolbar icon to enable mirroring in the current tab. Click again to restore the original view. The ON badge indicates that mirroring is enabled.

The video image is reflected while separate player buttons, the timeline and control overlays stay in place. Use it whenever a mirrored view makes a video easier to follow.

Features:

- One-click switching through a video-and-mirror toolbar icon.
- Independent state for each tab.
- Support for multiple videos and nested open shadow trees.
- Automatic mirroring of dynamically loaded players.
- Support for SPA navigation and state retention across page reloads.
- Restoration of the video's original scale when disabled.

Supported websites: vk.com, vkvideo.ru and vkvideo.com, including subdomains. Only video elements inside open Shadow DOM are supported. Light-DOM videos and closed shadow trees are excluded. Text embedded in the video image is mirrored with it. Future changes to the VK player may require an extension update.

While enabled, the extension watches DOM changes and checks for newly attached open shadow trees once per second. Background tabs may take longer to update. Closing the tab or restarting the browser resets its state.

No advertising, analytics or transmission of user data to the developer. Page structure and CSS are processed locally. The storage permission is used only for temporary per-tab settings. Website access is needed to locate and mirror supported video elements.

Developed by Kardanio.
Developer GitHub: https://github.com/Kardanio

An independent extension by Kardanio. It is not an official VK product and is not affiliated with or endorsed by VK.
