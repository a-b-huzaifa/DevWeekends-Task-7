import { useState, useEffect, useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
];

function App() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const intervalRef = useRef(null);

  function goTo(i) {
    setIndex((i + images.length) % images.length);
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  useEffect(() => {
    if (!autoplay) return;

    intervalRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [autoplay]);

  return (
    <div className="wrap">
      <h1>Image Slider</h1>

      <div className="slider">
        <div
          className="slide-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img className="slide" key={i} src={src} alt={`Slide ${i + 1}`} />
          ))}
        </div>

        <div className="slider-controls">
          <button onClick={prev} aria-label="Previous slide">‹</button>
          <button onClick={next} aria-label="Next slide">›</button>
        </div>
      </div>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="autoplay-toggle">
        <button className={autoplay ? 'on' : ''} onClick={() => setAutoplay((a) => !a)}>
          Autoplay: {autoplay ? 'On' : 'Off'}
        </button>
      </div>
    </div>
  );
}

export default App;
