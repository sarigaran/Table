import React from "react";
import { useState } from "react";

function Universities(props) {

    const [collegedada, setcollegedada] = useState([

        { name: 'mzcet', location: 'pkt' },
        { name: 'srm', location: 'trichy' },
        { name: 'vels', location: 'chennai' }
    ]);

    return (
        <>
            {collegedada.map(data => {
                return <College key={data.name} clg={data} />
            })}
        </>

    );
}
function College(props) {
    return (
        <>
            <h1>my clg name is {props.clg.name};</h1>
            <h1>my clg location is {props.clg.location};</h1>
        </>
    )
}
export default Universities;