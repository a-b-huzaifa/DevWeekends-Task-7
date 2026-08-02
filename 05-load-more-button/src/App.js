import { useState, useEffect, Fragment } from 'react';

const PAGE_SIZE = 5;

function App() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <div className="wrap">
      <h1>Load More Button</h1>

      {status === 'loading' && <p className="status">Loading posts…</p>}
      {status === 'error' && <p className="status">Could not load posts. Try refreshing.</p>}

      {status === 'ready' && (
        <Fragment>
          <div className="post-list">
            {visiblePosts.map((post) => (
              <div className="post-card" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>

          <div className="load-more-row">
            <button onClick={() => setVisibleCount((c) => c + PAGE_SIZE)} disabled={!hasMore}>
              {hasMore ? 'Load more' : 'No more posts'}
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
