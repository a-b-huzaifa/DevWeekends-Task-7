import { useState } from 'react';

const treeData = {
  name: 'src',
  children: [
    {
      name: 'components',
      children: [
        { name: 'Navbar.js' },
        { name: 'Footer.js' },
        {
          name: 'ui',
          children: [{ name: 'Button.js' }, { name: 'Modal.js' }],
        },
      ],
    },
    {
      name: 'hooks',
      children: [{ name: 'useFetch.js' }, { name: 'useOnClickOutside.js' }],
    },
    { name: 'App.js' },
    { name: 'index.js' },
  ],
};

function TreeNode({ node }) {
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const [open, setOpen] = useState(false);

  return (
    <div className="tree-node">
      <div className="tree-node-row" onClick={() => hasChildren && setOpen((o) => !o)}>
        {hasChildren ? (
          <span className={`toggle-icon ${open ? 'open' : ''}`}>▸</span>
        ) : (
          <span className="leaf-dot">•</span>
        )}
        <span>{node.name}</span>
      </div>

      {hasChildren && open && (
        <div className="tree-children">
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="wrap">
      <h1>Tree View / Menu UI</h1>
      <div className="tree">
        <TreeNode node={treeData} />
      </div>
    </div>
  );
}

export default App;
