import React from 'react';

function Alert_Component({ message, type = 'danger' }) {
  if (!message) return null; 

  return (
    <div
      className={`alert alert-${type} text-center`}
      role="alert"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: 'fit-content',
        maxWidth: '90%',
      }}
    >
      {message}
    </div>
  );
}

export default Alert_Component;