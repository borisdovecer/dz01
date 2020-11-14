import React from "react";

function Medal(props) {
        return (
            <div className={"medal"}>
                <button  onClick={props.end} >End</button>
            </div>
        );
}

export default Medal;
