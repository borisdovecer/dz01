import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./8.wow,naucili smo nase novo slovo.Fenomenalno, tako to rade sampioni.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 300 })(Audio);

const Audio2 = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./9. zasluzeno stize i zlatna dzivi medalje.mp3"
    preload={"auto"}
/>
const DelAudio2 = Delay({ delay: 10500 })(Audio2);

class Star extends React.Component {

    render() {
        return (
            <div className={"star"}>
                <DelAudio />
                <DelAudio2 />
                <button className="main-button" onClick={this.props.nextSlide}>Dalje</button>
            </div>
        );
    }
}

export default Star;
