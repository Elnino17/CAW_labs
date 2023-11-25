// DisplayTab.js
import React from 'react';

const DisplayTab = ({ tab }) => {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>Element {index + 1} is: {item}</li>
      ))}
    </ul>
  );
};

export default DisplayTab;
