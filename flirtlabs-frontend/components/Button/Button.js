import React from 'react';
import styles from './Button.module.scss'; // Importing styles.

const Button = ({ children, onClick, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
