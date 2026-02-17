import { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';
import Grammar from './pages/Grammar';
import Vocabulary from './pages/Vocabulary';
import Kanji from './pages/Kanji';
import Conversations from './pages/Conversations';
import Practice from './pages/Practice';
import Conjugation from './pages/Conjugation';
import Particles from './pages/Particles';
import './styles/App.css';

const navItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { section: 'Writing' },
  { path: '/hiragana', label: 'Hiragana ひらがな', icon: 'あ' },
  { path: '/katakana', label: 'Katakana カタカナ', icon: 'ア' },
  { section: 'Language' },
  { path: '/grammar', label: 'Grammar 文法', icon: '文' },
  { path: '/conjugation', label: 'Conjugation 活用', icon: '変' },
  { path: '/particles', label: 'Particles 助詞', icon: 'は' },
  { path: '/vocabulary', label: 'Vocabulary 語彙', icon: '言' },
  { path: '/kanji', label: 'Kanji 漢字', icon: '漢' },
  { section: 'Practice' },
  { path: '/practice', label: 'Kana Quiz 練習', icon: '✏' },
  { path: '/conversations', label: 'Conversations 会話', icon: '話' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const closeSidebar = () => setSidebarOpen(false);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const deltaX = endX - touchStartX.current;
    const deltaY = Math.abs(endY - touchStartY.current);
    // Ignore vertical scrolls
    if (deltaY > Math.abs(deltaX)) { touchStartX.current = null; return; }
    if (deltaX > 60 && touchStartX.current < 40) setSidebarOpen(true);
    if (deltaX < -60 && sidebarOpen) setSidebarOpen(false);
    touchStartX.current = null;
  }, [sidebarOpen]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Mobile top bar */}
        <header className="mobile-header">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Menu">
            {sidebarOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
          <span className="mobile-header-title">日本語マスター</span>
        </header>

        <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={closeSidebar} />

        <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h1>
              <span className="flag">🇯🇵</span>
              日本語マスター
            </h1>
            <p>Nihongo Mastery</p>
          </div>
          <div className="sidebar-nav">
            {navItems.map((item, i) => {
              if (item.section) {
                return <div key={i} className="nav-section">{item.section}</div>;
              }
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeSidebar}
                >
                  <span className="nav-icon" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{item.icon}</span>
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/kanji" element={<Kanji />} />
            <Route path="/conjugation" element={<Conjugation />} />
            <Route path="/particles" element={<Particles />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/conversations" element={<Conversations />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
