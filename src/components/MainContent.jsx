import React from 'react';
import './MainContent.css';

function MainContent({ isSidebarOpen, children }) {
  return (
    <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {children}
    </main>
  );
}

export default MainContent;
