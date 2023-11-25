// MainApp.js
import React from 'react';
import ClickMeComponent from './ClickMeComponent';
import ToggleButtonComponent from './ToggleButtonComponent';
import App from './App';
import CounterComponent from './CounterComponent';

const MainApp = () => {
  return (
    <div>
      {/* Exercise 1 */}
      <ClickMeComponent />

      {/* Exercise 2 */}
      <ToggleButtonComponent />

      {/* Exercise 3 */}
      <App />

      {/* Exercise 4 */}
      <CounterComponent />
    </div>
  );
};

export default MainApp;
