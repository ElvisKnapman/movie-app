import React from 'react';

import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className="loading_spinner_container">
      <Loader
        type="Puff"
        color="rgb(38, 55, 75)"
        height={80}
        width={80}
        className="loading_spinner"
      />
    </div>
  );
};

export default LoadingSpinner;
