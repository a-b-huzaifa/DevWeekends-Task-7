# 01 — Accordion

Expand/collapse panel list where only one panel is open at a time.

## Hook used
- `useState` — tracks which panel's `id` is currently open. Clicking the
  open panel's header again closes it (toggle behavior).

## Run it
```bash
npm install
npm start
```

## Files
- `src/App.js` — component logic
- `src/index.css` — brutalist styling
- `src/index.js` — CRA entry point
