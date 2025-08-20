import { lazy, Suspense } from 'react';

const Test = lazy(() => import('./components/Test'));

function App() {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Suspense>
        <Test />
      </Suspense>
    </div>
  );
}

export default App;
