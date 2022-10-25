import React from "react";

function Potato(props){
    console.log(props)
    return (
        <h3>
            I love {props.fav}
        </h3>
    );
}

export default Potato;