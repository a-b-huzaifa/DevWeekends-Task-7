import { useState } from 'react';

const items = [
  {
    id: 'a1',
    title: 'What is React?',
    body: 'React is a JavaScript library for building user interfaces out of small, reusable components.',
  },
  {
    id: 'a2',
    title: 'What is a hook?',
    body: 'Hooks are functions (useState, useEffect, useRef, ...) that let function components use state and other React features.',
  },
  {
    id: 'a3',
    title: 'Why useState here?',
    body: 'useState tracks which single accordion panel is currently open, so clicking a header toggles that panel and closes the others.',
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.title}</span>
        <span className="icon">+</span>
      </button>
      <div className={`accordion-panel ${isOpen ? 'open' : ''}`}>
        <div className="accordion-panel-inner">{item.body}</div>
      </div>
    </div>
  );
}

function App() {
  const [openId, setOpenId] = useState(items[0].id);

  function handleToggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className="wrap">
      <h1>Accordion</h1>
      <div className="accordion">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
