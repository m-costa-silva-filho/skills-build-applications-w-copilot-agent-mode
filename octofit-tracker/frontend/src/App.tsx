import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Octofit Tracker</h1>
      <p>Welcome to the React 19 Vite frontend.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        count is {count}
      </button>
    </main>
  );
}

export default App;
