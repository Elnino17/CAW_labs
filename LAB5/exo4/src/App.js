// App.js
import React, { useState } from 'react';
import AddDivForm from './AddDivForm';

const App = () => {
  const [divs, setDivs] = useState([]);

  const handleAddDiv = (divStyle) => {
    setDivs([...divs, divStyle]);
  };

  return (
    <div>
      <h1>Add Div Elements Example</h1>
      <AddDivForm onAddDiv={handleAddDiv} />

      <div style={{ marginTop: '20px' }}>
        {divs.map((style, index) => (
          <div
            key={index}
            style={{
              height: `${style.height}px`,
              width: `${style.width}px`,
              backgroundColor: style.backgroundColor,
              border: '1px solid #000',
              margin: '5px',
            }}
          >
            {/* You can customize the content of each div here */}
            Div {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
