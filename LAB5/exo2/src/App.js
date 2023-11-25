// App.js
import React from 'react';
import DisplayTab from './DisplayTab';

const App = () => {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "orange", "banana", "grape"];

  return (
    <div>
      <h1>DisplayTab Example</h1>
      <DisplayTab tab={tab1} />
      <DisplayTab tab={tab2} />
    </div>
  );
};

export default App;
