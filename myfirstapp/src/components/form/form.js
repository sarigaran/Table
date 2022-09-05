import React from "react";
export default function Myform(){
    return(
        <form>
            <label for="name">enter your name</label>
            <input type="text" id="fname" name="fname"/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password"></input>
        </form>
    )

}
