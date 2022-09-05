import React from "react";
import { useState } from "react";

function Favoritecolor(){

        const [color,setcolor]=useState('black');
        const [model]=useState('mahindra');
        const [year]=useState('1991');

return(

<>

<h1>I like {color} {model}{year}</h1>

<button type="button"onClick={()=>setcolor("blue")}>Blue</button>
<button type="button"onClick={()=>setcolor("red")}>Red</button>
<button type="button"onClick={()=>setcolor("Green")}>Green</button>
<button type="button"onClick={()=>setcolor("Orange")}>Orange</button>
<button type="button"onClick={()=>setcolor("brown")}>Brown</button>

</>


);

}

export default Favoritecolor;