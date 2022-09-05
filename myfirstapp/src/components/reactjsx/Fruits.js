import React from 'react';

export default function Myelement() {
    var myStyle = {  
        fontSize: 80,  
        fontFamily: 'Courier',  
        color: '#003300'  
     }  
    return (
          Myelement = (
            <ul>
                <li style={myStyle}>Apples</li>
                <li>Bananas</li>
                <li>Cherries</li>
            </ul>
            )
        
    );
}

