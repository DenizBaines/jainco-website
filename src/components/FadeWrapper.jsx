// src/components/FadeWrapper.jsx
import React from 'react';


const FadeWrapper = ({ children }) => {
  return (
    <div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </div>
  );
};

export default FadeWrapper;
