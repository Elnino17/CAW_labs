// ToggleButtonComponent.js
import React, { useState } from 'react';

const ToggleButtonComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {clicked ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  );
};

export default ToggleButtonComponent;
