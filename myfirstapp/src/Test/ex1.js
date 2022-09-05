import { useState } from "react";
function Agri(props){
const [agri]=useState([{
    product:"rice",price:"999"

    
}]);
return(
    
<>
{

    agri.map(
        agri=>{
            return(
                <Rolex key={agri.product}things={agri}/>
            )
        }
    )
}

</>  
)}

function Rolex(props){



    
return(
<>
<h1>This is {props.things.product},price is{props.things.price}</h1>
</>


)


}
export default Agri;




