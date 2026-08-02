# 03 — Star Rating

5-star rating widget with hover preview and click-to-commit.

## Hook used
- `useState` — two pieces of state: the committed `rating` (set on
  click) and the currently `hovered` star (used for live preview,
  falls back to `rating` when not hovering).

## Run it
```bash
npm install
npm start
```

## Files
- `src/App.js`, `src/index.css`, `src/index.js`
