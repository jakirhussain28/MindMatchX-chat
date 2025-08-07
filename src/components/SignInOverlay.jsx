import React from 'react';
import './SignInOverlay.css';

function SignInOverlay({ onClose }) {
  return (
    <div className="signin-overlay" onClick={onClose}>
      <div className="signin-modal" onClick={(e) => e.stopPropagation()}>
        {/* <div className="signin-header">
          <h3 className="signin-title">Sign In / Sign Up</h3>
          <button className="close-button" onClick={onClose} aria-label="Close sign in modal">
            <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div> */}
        <div className="signin-options">
          <button className="auth-button github">
            <svg className="auth-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.804 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.464-1.33-5.464-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.535-1.52.117-3.176 0 0 1.008-.32 3.302 1.23.957-.266 1.983-.4 3.003-.405 1.02.005 2.046.14 3.003.405 2.294-1.55 3.302-1.23 3.302-1.23.653 1.656.238 2.876.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.8 5.62-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .318.21.69.825.577C20.565 21.8 24 17.303 24 12c0-6.628-5.372-12-12-12z"/>
            </svg>
            <span>Continue with GitHub</span>
          </button>
          <button className="auth-button google">
            <svg className="auth-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.24 10.285V11.69h4.225c-.182 1.09-.775 2.053-1.775 2.716-.99.663-2.31 1.04-3.75 1.04-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25c1.85 0 3.45.79 4.6 1.89l2.2-2.2c-1.5-1.4-3.5-2.2-5.8-2.2-4.95 0-9 4.05-9 9s4.05 9 9 9c4.95 0 8.5-3.5 8.5-8.75 0-.58-.06-1.14-.16-1.68h-8.34z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
          <button className="auth-button email">
            <svg className="auth-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>Continue with Email</span>
          </button>
        </div>
        <p className="signin-info">
          IN PROGRESS : If you do not have an account, choose your preferred method to create one.
        </p>
      </div>
    </div>
  );
}

export default SignInOverlay;
