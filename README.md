# React Hooks Project Pack

8 small hook-focused React apps, built for the DevWeekends Task 7 /
"React hooks project pack" roadmap item, following this learning
resource: https://www.youtube.com/watch?v=5ZdHfJVAY-s

## Tech stack
HTML, CSS, JS, React — each project is its own **Create React App**
(`react-scripts`, npm-installed `react` + `react-dom`). No Vite, no
oxlint.

## Projects

| # | Folder | What it does | Hooks |
|---|---|---|---|
| 1 | [`01-accordion`](./01-accordion) | Expand/collapse panel list | `useState` |
| 2 | [`02-random-color-generator`](./02-random-color-generator) | Random hex/rgb color + copy | `useState`, `useRef` |
| 3 | [`03-star-rating`](./03-star-rating) | 5-star rating with hover preview | `useState` |
| 4 | [`04-image-slider`](./04-image-slider) | Carousel with autoplay | `useState`, `useEffect`, `useRef` |
| 5 | [`05-load-more-button`](./05-load-more-button) | Fetches posts, reveals more on click | `useState`, `useEffect` |
| 6 | [`06-tree-view-menu`](./06-tree-view-menu) | Recursive expandable file tree | `useState` |
| 7 | [`07-weather-app`](./07-weather-app) | Live weather + Light/Dark Theme toggle | `useState`, `useEffect`, `useRef` |
| 8 | [`08-food-recipe-app`](./08-food-recipe-app) | Recipes with category filter + search + Theme toggle | `useState`, `useEffect`, `useRef` |

Each folder is a full standalone CRA project — its own `package.json`,
`src/`, `public/`, and `README.md`.

## Running any project

```bash
cd 0X-project-name
npm install
npm start
```

## Acceptance criteria mapping

- ✅ `useState`, `useEffect`, and `useRef` used appropriately across
  projects — see the table above.
- ✅ Weather app fetches and displays live API data — `07-weather-app`
  calls the free Open-Meteo geocoding + forecast APIs.
- ✅ Food recipe app has search and filter functionality —
  `08-food-recipe-app` filters by category (server-side, via API) and
  searches by name (client-side, over the loaded results).
- ✅ Clean Codebase — Streamlined comments; all boilerplate template comments and redundant hook explanations have been removed.

## Design

All 8 apps share a consistent brutalist look (bold black borders, hard
drop shadows, monospace type, red accent). 
Additionally, the **Weather App** and **Food Recipe App** feature a **Light/Dark theme function** with a tactile brutalist pressing animation, utilizing CSS variables and persisting choices in `localStorage`.

## Repository Setup & Ignored Files

Each project has its own `node_modules` once installed — that's normal
for 8 independent CRA apps. We maintain a root `.gitignore` and individual project `.gitignore` files to exclude `node_modules`, `build/` directories, environment variables, logs, and development environment files from version control. Run `npm install` per folder before starting any of them.
