# Interactive Website (Sliders, Modules & Forms)

This project extends static HTML/CSS with **native ES6 JavaScript** and modular architecture.  
All functionality is bundled (Gulp) and tested across modern browsers + IE11 (via polyfills).

## Live demo
[Bring it live demo](https://yakolga.github.io/bring-it/dist/)

## Features
- **Sliders**: fullscreen, looping, autoplay, active/inactive states.
- **Video Modals**: open via `.play` button, load from `data-url`, close + stop playback.  
  Second video unlocks only after the first is watched.
- **Forms**: AJAX submission (no reload), email (no Cyrillic), US phone mask, success/error notifications.
- **Accordion**: smooth expand/collapse.
- **Differences List**: dynamic card reveal with fadeIn.
- **Download PDF**: button triggers file download.
- **Architecture**: ES6 modules (`slider.js`, `ytVideo.js`, `forms.js`, etc.), no code duplication.