import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        {isOpen ? (
          <h2 className="sidebar-title">MindMatchX</h2>
        ) : (
          <h2 className="sidebar-title-collapsed">MX</h2>
        )}
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#" className="nav-item">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              {isOpen && <span className="nav-text">Profiles</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              {isOpen && <span className="nav-text">Favourites</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {isOpen && <span className="nav-text">Settings</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9.247a4.75 4.75 0 010 7.506M15.772 9.247a4.75 4.75 0 000 7.506m-7.54-3.753h.008v.008h-.008v-.008zm.008 3.753h.008v.008h-.008v-.008zm-.008 3.753h.008v.008h-.008v-.008zM3.25 6.25h.008v.008H3.25V6.25zm.008 3.753h.008v.008h-.008v-.008zm-.008 3.753h.008v.008H3.25v-.008zm.008 3.753h.008v.008h-.008v-.008zM19.75 6.25h.008v.008h-.008V6.25zm.008 3.753h.008v.008h-.008v-.008zm-.008 3.753h.008v.008h-.008v-.008zm.008 3.753h.008v.008h-.008v-.008zM12 6.25h.008v.008H12V6.25zm.008 3.753h.008v.008H12v-.008zm-.008 3.753h.008v.008H12v-.008zm.008 3.753h.008v.008H12v-.008z"></path></svg>
              {isOpen && <span className="nav-text">Help</span>}
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        <svg
          className={`toggle-icon ${isOpen ? 'open' : 'closed'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}></path>
        </svg>
      </button>
    </aside>
  );
}

export default Sidebar;
