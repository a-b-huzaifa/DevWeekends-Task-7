# 04 — Image Slider

Carousel with prev/next buttons, dot navigation, and toggleable autoplay.

## Hooks used
- `useState` — current slide `index`, `autoplay` on/off.
- `useEffect` — starts a `setInterval` to auto-advance slides when
  autoplay is on, and cleans it up (`clearInterval`) whenever the
  effect re-runs or the component unmounts, so timers never stack up.
- `useRef` — stores the interval id across renders without causing
  extra re-renders.

## Run it
```bash
npm install
npm start
```

## Files
- `src/App.js`, `src/index.css`, `src/index.js`
