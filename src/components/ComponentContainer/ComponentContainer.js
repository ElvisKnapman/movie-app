import React from 'react';

const ComponentContainer = ({ children, styles }) => {
  return (
    <div className="component_container" style={styles}>
      {children}
    </div>
  );
};

export default ComponentContainer;
