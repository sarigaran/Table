import React, { useState } from "react";
function Employe(props) {
    const [dat] = useState(

        [
            {name: "hari", company: "aathi"},
            {name:"sri",company:"soft"}
    
    ]
    );

    return (
        <>
            {dat.map(data => {
                return (
                    <Company key={data.name} employee={data} />
                );
            })

            }

        </>

    )
    function Company(props) {
        return (

            <>
                <h1>my self{props.employee.name}</h1>
                <h1>my company  is {props.employee.company}</h1>
            </>

        )

    }


}


export default Employe;