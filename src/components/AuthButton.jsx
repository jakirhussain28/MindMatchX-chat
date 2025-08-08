import React from 'react';

function AuthButton({ icon, text, className, onClick }) {
  return (
    <button className={`auth-button ${className}`} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default AuthButton;
