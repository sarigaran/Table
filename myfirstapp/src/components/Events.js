import React from 'react';
import ReactDOM from 'react-dom/client';

function Hockey() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hockey />);
export default Hockey;