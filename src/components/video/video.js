import React from "react"

function Video(props) {
    return (
        <div className={"pehar"}>
            <video
                src="./A - Z.mp4"
                autoPlay
                loop
            />
            <button className="main-button" onClick={props.end} >End</button>
        </div>
    );
}

export default Video;
