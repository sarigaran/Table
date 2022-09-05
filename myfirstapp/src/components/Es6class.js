import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a { props.brand.brand }!</h2>;
  
}

function Garage() {
    const carinfo={brand:'ford',model:'mustang'};
  return (
    <>
	    <h2>Who lives in my garage?</h2>;
	    <Car brand={carinfo}/>;
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
export default Garage;




