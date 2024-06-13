import React from 'react';

const Button = (props) => {
  const { className, style, onClick, disabled, children } = props;

  return (
    <button
      type="button"
      className={`btn ${className}`}
      style={{ backgroundColor: 'transparent', border: 'none', color: 'black', ...style }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
