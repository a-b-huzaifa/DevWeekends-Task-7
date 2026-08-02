import { useState, useEffect, useRef, Fragment } from 'react';

const BASE = 'https://www.themealdb.com/api/json/v1/1';

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('Chicken');
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('loading');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const searchRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    fetch(`${BASE}/categories.php`)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []))
      .catch(() => {});
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    setStatus('loading');
    fetch(`${BASE}/filter.php?c=${encodeURIComponent(category)}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, [category]);

  const visibleMeals = meals.filter((m) =>
    m.strMeal.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="wrap">
      <div className="header-row">
        <h1>Food Recipe App</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>

      <div className="controls">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.length === 0 && <option>{category}</option>}
          {categories.map((c) => (
            <option key={c.idCategory} value={c.strCategory}>
              {c.strCategory}
            </option>
          ))}
        </select>
      </div>

      {status === 'loading' && <p className="status">Loading recipes…</p>}
      {status === 'error' && <p className="status">Could not load recipes. Try again.</p>}

      {status === 'ready' && (
        <Fragment>
          {visibleMeals.length === 0 ? (
            <p className="status">No recipes match "{search}".</p>
          ) : (
            <div className="recipe-grid">
              {visibleMeals.map((meal) => (
                <div className="recipe-card" key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                  <div className="recipe-card-body">
                    <h3>{meal.strMeal}</h3>
                    <span className="category">{category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default App;
