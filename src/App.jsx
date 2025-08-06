import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // Initialize sidebar state from localStorage, default to true (open) if not found
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem('isSidebarOpen');
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  // Save sidebar state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent isSidebarOpen={isSidebarOpen}>

      </MainContent>
    </div>
  );
}

export default App;
