import React from "react";
function Car(props){
    return(
       <li> I am a {props.brand}</li>  
    );
}

function Garage(){
    const cars=["bmw","bolero","aadi",,"thor"];
    return(
<>
<ul>
{cars.map((car) => <Car brand={car} />)}
</ul>

</>

    );
}

export default Garage;
