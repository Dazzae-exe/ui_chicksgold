import React from 'react';
import '../../styles/Button/index.css';

function Button({ children, href, onClick, variant = 'primary', size = 'medium', disabled = false, className = '', ariaHidden = false }) {
  const baseClassName = `custom-button ${variant} ${size} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClassName} role="button">
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClassName}
      aria-hidden={ariaHidden}
    >
      {children}
    </button>
  );
}

export default Button;