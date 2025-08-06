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
      <nav className="sidebar-nav ">
        <ul>
          <li>
            <a href="#" className="nav-item">
              {/* Home Icon */}
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v9a2 2 0 002 2h10a2 2 0 002-2v-9"></path>
              </svg>
              {isOpen && <span className="nav-text">Home</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              {/* Courses Icon (Graduation Cap) */}
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM3 17.998l9 5 9-5M3 12l9 5 9-5"></path>
              </svg>
              {isOpen && <span className="nav-text">Courses</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              {/* Topics Icon (Lightbulb) */}
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 22v-4M15 21h-6"></path>
              </svg>
              {isOpen && <span className="nav-text">Topics</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              {/* Quiz Icon (Clipboard with Checkmark) */}
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7l2 2 4-4"></path>
              </svg>
              {isOpen && <span className="nav-text">Quiz</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              {/* ChatAI Icon (Chat Bubble) */}
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              {isOpen && <span className="nav-text">ChatAI</span>}
            </a>
          </li>
        </ul>
        <div className="sidebar-divider"></div> {/* New divider line */}
      </nav>

      {isOpen && (
        <div className="sign-in-section">
          <p className="sign-in-text">Sign in to unlock more features.</p>
          <button className="sign-in-button">
            <svg className="sign-in-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> {/* Arrow */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 4v16"></path> {/* Right bracket */}
            </svg>
            SIGN IN
          </button>
        </div>
      )}

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
