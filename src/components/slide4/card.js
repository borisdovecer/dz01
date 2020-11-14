import React from "react";
// import ReactDelayRender from 'react-delay-render';

function Card(props){

    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={props.data.class} name={props.data.value} id={props.data.id} onClick={props.onClick}> </div>
        </div>
        );
}

export default Card
