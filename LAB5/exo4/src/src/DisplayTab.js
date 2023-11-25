// DisplayTab.js
import React from 'react';

const DisplayTab = ({ tab }) => {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DisplayTab;
