import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SignInOverlay from './components/SignInOverlay'; // Import the new component
import './App.css';

function App() {
  // Initialize sidebar state from localStorage, default to true (open) if not found
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem('isSidebarOpen');
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  // State to manage the currently active navigation item
  const [activeNavItem, setActiveNavItem] = useState('Home'); // Default to 'Home'

  // State to manage the visibility of the sign-in overlay
  const [showSignInOverlay, setShowSignInOverlay] = useState(false);

  // Save sidebar state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignInClick = () => {
    setShowSignInOverlay(true);
  };

  const handleCloseSignInOverlay = () => {
    setShowSignInOverlay(false);
  };

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        onSignInClick={handleSignInClick} // Pass the handler to Sidebar
      />
      <MainContent isSidebarOpen={isSidebarOpen}>
        {/* Content based on activeNavItem */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '1.5em',
          fontWeight: '600',
          padding: '20px',
          borderRadius: '8px',
          background: 'rgba(0,0,0,0.2)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          maxWidth: '600px',
          margin: 'auto',
          border: '1px solid var(--border)'
        }}>
          <p style={{
            color: 'var(--primary)',
            fontSize: '1.5em',
            marginBottom: '10px',
            // animation: 'pulse 2s infinite ease-in-out'
          }}>"Use ChatMaX"</p>
          <p>"{activeNavItem}" Feature Coming Soon!</p>
          <p style={{ fontSize: '0.8em', color: 'var(--text-secondary)', marginTop: '10px' }}>
            I am working hard to bring you this exciting new functionality. Stay tuned!
          </p>
        </div>
      </MainContent>

      {showSignInOverlay && <SignInOverlay onClose={handleCloseSignInOverlay} />}
    </div>
  );
}

export default App;
