import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./19.wow.pa ti si pravi oravcati sampion, sad smo naucili jos jedno slovo. hajde da probamo da citamo.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 300 })(Audio);



function Medal(props) {
        return (
            <div className={"medal"}>
                <DelAudio />
                <button className="main-button" onClick={props.nextSlide} >End</button>
            </div>
        );
}

export default Medal;
