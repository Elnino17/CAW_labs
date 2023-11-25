// AddDivForm.js
import React, { useState } from 'react';

const AddDivForm = ({ onAddDiv }) => {
  const [divStyle, setDivStyle] = useState({
    height: '',
    width: '',
    backgroundColor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDivStyle({ ...divStyle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDiv(divStyle);
    setDivStyle({
      height: '',
      width: '',
      backgroundColor: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Height:
        <input
          type="text"
          name="height"
          value={divStyle.height}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Width:
        <input
          type="text"
          name="width"
          value={divStyle.width}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Background Color:
        <input
          type="text"
          name="backgroundColor"
          value={divStyle.backgroundColor}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Add Div</button>
    </form>
  );
};

export default AddDivForm;
