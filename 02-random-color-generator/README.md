# 02 — Random Color Generator

Generates a random color, toggles between HEX/RGB display, and copies
the value to the clipboard.

## Hooks used
- `useState` — current color, display mode (hex/rgb), copy feedback message.
- `useRef` — holds a direct reference to the (readonly) text input so it
  can be `.select()`-ed right before copying, without needing extra
  state just for text selection.

## Run it
```bash
npm install
npm start
```

## Files
- `src/App.js`, `src/index.css`, `src/index.js`
