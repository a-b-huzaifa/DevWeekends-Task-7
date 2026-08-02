# 08 — Food Recipe App

Browse recipes by category and search within the results by name.

## Features
- **Recipe Search & Filter**: Server-side category filtering combined with client-side text filtering.
- **Light/Dark Theme**: Brutalist-styled toggle button with dynamic CSS variable overrides and `localStorage` persistence.

## Hooks used
- `useState` — `categories` list, selected `category`, fetched `meals`, `search` text, request `status`, and `theme` (light/dark).
- `useEffect` (x3) — loads the category list on mount; re-fetches meals when category changes; registers and updates the theme status on `document.body.classList` and `localStorage`.
- `useRef` — focuses the search input on first load.

## Search + filter (acceptance criterion)
- **Filter**: choosing a category re-fetches meals for that category
  from the API (server-side filter).
- **Search**: the text input filters the currently loaded meals by
  name, client-side, recalculated on every keystroke.

## API
[TheMealDB](https://www.themealdb.com/api.php) — free public test key
(`1`), no signup required. Endpoints used: `/categories.php`,
`/filter.php?c=CATEGORY`.

## Run it
```bash
npm install
npm start
``` Requires internet access.

## Files
- `src/App.js`, `src/index.css`, `src/index.js`
