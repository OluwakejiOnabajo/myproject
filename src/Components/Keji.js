import React from "react";

function keji(props){
    return(
        <div>
        <p onClick={props.caleb}>My name is {props.name} and I'm +{props.age} today!</p>
        input your name: <input type="text" value={props.name} onChange={props.zeh} />
        </div>
    )
}

export default keji;