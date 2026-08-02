# 06 — Tree View / Recursive Navigation Menu

Recursive expandable folder/file tree (like a VS Code file explorer).

## Hook used
- `useState` — each `TreeNode` holds its own `open` boolean. Because
  the component renders itself recursively for `node.children`, every
  branch of the tree gets an independent piece of state automatically
  — no manual tracking of "which node ids are expanded" needed.

## Run it
```bash
npm install
npm start
```

## Files
- `src/App.js`, `src/index.css`, `src/index.js`
