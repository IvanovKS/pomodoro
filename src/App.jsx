import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="app">
      <Home />
      <NotFound />
      <Settings />
    </div>
  );
}

export default App;
