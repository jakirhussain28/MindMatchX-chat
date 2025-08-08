import React from 'react';

function NavItem({ icon, text, isActive, onClick, isSidebarOpen }) {
  return (
    <li>
      <a
        href="#"
        className={`nav-item ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {icon}
        {isSidebarOpen && <span className="nav-text">{text}</span>}
      </a>
    </li>
  );
}

export default NavItem;
