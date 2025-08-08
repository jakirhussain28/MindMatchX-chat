import React, { useState } from 'react';
import AuthButton from './AuthButton'; // Import the new AuthButton component
import './SignInOverlay.css';

function SignInOverlay({ onClose }) {
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleEmailClick = () => {
    setShowEmailInput(true);
  };

  const handleBackClick = () => {
    setShowEmailInput(false);
  };

  return (
    <div className="signin-overlay" onClick={onClose}>
      <div className="signin-modal" onClick={(e) => e.stopPropagation()}>
        {showEmailInput ? (
          <div className="email-auth-form" key="email-form">
            <input
              type="email"
              placeholder="yourname@example.com"
              className="email-input"
              aria-label="Email address"
            />
            <div className="form-actions">
              <button className="back-button" onClick={handleBackClick}>
                Back
              </button>
              <button className="send-button">
                Send Link
              </button>
            </div>
            <p className="signin-info">
          We are now using passwordless login at MindMatchX! Whether you have an existing account with us or not.
            </p>
          </div>
        ) : (
          <div className="signin-options" key="auth-options">
            <AuthButton
              className="google"
              icon={
                <svg className="auth-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V11.69h4.225c-.182 1.09-.775 2.053-1.775 2.716-.99.663-2.31 1.04-3.75 1.04-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25c1.85 0 3.45.79 4.6 1.89l2.2-2.2c-1.5-1.4-3.5-2.2-5.8-2.2-4.95 0-9 4.05-9 9s4.05 9 9 9c4.95 0 8.5-3.5 8.5-8.75 0-.58-.06-1.14-.16-1.68h-8.34z"/>
                </svg>
              }
              text="Continue with Google"
            />
            <AuthButton
              className="email"
              icon={
                <svg className="auth-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              }
              text="Continue with Email"
              onClick={handleEmailClick}
            />
            <p className="signin-info">
          IN PROGRESS : If you do not have an account, choose your preferred method to create one.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignInOverlay;
