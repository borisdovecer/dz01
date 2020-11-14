import React from "react";

function Main(props){
    return (
        <div className={"main"}>
                <button  onClick={props.nextSlide} >Start</button>
        </div>
    );
}

export default Main;
