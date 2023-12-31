// ClickMeComponent.js
import React, { useState } from 'react';

const ClickMeComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
};

export default ClickMeComponent;
