import { useState } from 'react';

function Star({ filled, onClick, onMouseEnter }) {
  return (
    <span className={`star ${filled ? 'filled' : ''}`} onClick={onClick} onMouseEnter={onMouseEnter}>
      ★
    </span>
  );
}

function App() {
  const totalStars = 5;

  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const displayValue = hovered ?? rating;

  return (
    <div className="wrap">
      <h1>Star Rating</h1>
      <div className="panel">
        <div className="stars" onMouseLeave={() => setHovered(null)}>
          {Array.from({ length: totalStars }, (_, i) => {
            const starValue = i + 1;
            return (
              <Star
                key={starValue}
                filled={starValue <= displayValue}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHovered(starValue)}
              />
            );
          })}
        </div>
        <p className="rating-label">
          {rating > 0 ? `You rated ${rating} / ${totalStars}` : 'Click a star to rate'}
        </p>
      </div>
    </div>
  );
}

export default App;
