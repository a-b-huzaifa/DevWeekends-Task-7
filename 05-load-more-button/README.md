# 05 — Load More Button

Fetches a list of posts from a public API and reveals more of them
each time the button is clicked, instead of paginating.

## Hooks used
- `useState` — the full fetched `posts` array, `visibleCount` (how many
  are shown), and `status` (loading/ready/error).
- `useEffect` — fetches all posts once on mount (`useEffect(fn, [])`).

## API
`https://jsonplaceholder.typicode.com/posts` (free, no key required).

## Run it
```bash
npm install
npm start
``` Requires internet access for
the fetch call.

## Files
- `src/App.js`, `src/index.css`, `src/index.js`
