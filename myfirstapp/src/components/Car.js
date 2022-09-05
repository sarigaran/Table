import React from "react"; 
import ReactDOM from "react-dom/client";


function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
const root = ReactDOM.createRoot(document.getElementById('root'));
export default Clock
