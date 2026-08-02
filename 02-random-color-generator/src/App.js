import { useState, useRef } from 'react';

function randomHex() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return `#${hex}`;
}

function hexToRgb(hex) {
  const int = parseInt(hex.slice(1), 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function App() {
  const [color, setColor] = useState(randomHex());
  const [mode, setMode] = useState('hex');
  const [copiedMsg, setCopiedMsg] = useState('');

  const inputRef = useRef(null);

  const displayValue = mode === 'hex' ? color : hexToRgb(color);

  function generate() {
    setColor(randomHex());
    setCopiedMsg('');
  }

  function copyToClipboard() {
    inputRef.current.select();
    navigator.clipboard
      .writeText(displayValue)
      .then(() => setCopiedMsg('Copied to clipboard!'))
      .catch(() => setCopiedMsg('Could not copy — copy manually.'));
  }

  return (
    <div className="wrap">
      <h1>Random Color Generator</h1>

      <div className="swatch" style={{ backgroundColor: color }} />

      <div className="mode-row">
        <button
          className={mode === 'hex' ? '' : 'inactive'}
          onClick={() => setMode('hex')}
        >
          HEX
        </button>
        <button
          className={mode === 'rgb' ? '' : 'inactive'}
          onClick={() => setMode('rgb')}
        >
          RGB
        </button>
      </div>

      <div className="code-row">
        <input ref={inputRef} type="text" readOnly value={displayValue} />
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <p className="copied-msg">{copiedMsg}</p>

      <button onClick={generate}>Generate new color</button>
    </div>
  );
}

export default App;
