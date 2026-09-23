import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home      from './pages/Home';
import About     from './pages/About';
import Team      from './pages/Team';
import Events    from './pages/Events';
import Resources from './pages/Resources';
import Gallery   from './pages/Gallery';
import JoinUs    from './pages/JoinUs';
import Contact   from './pages/Contact';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" role="main">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/team"      element={<Team />} />
          <Route path="/events"    element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery"   element={<Gallery />} />
          <Route path="/join"      element={<JoinUs />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
