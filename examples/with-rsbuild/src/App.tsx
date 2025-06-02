import { lazy } from 'react';

const Test = lazy(() => import('./components/Test'));

const App = () => {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Test />
    </div>
  );
};

export default App;
