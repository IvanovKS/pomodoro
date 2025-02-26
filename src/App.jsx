import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Settings from './pages/Settings';
import About from './pages/About';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';

function App() {
  return (
    <SoundProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SoundProvider>
  );
}

export default App;
