import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";
const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./10.vidi vidi, neko nam dolazi. nasi drugari iz Savane.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 200 })(Audio);
const Audio2 = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./11.ura doneli su nam novo slovo.mp3"
    preload={"auto"}
/>
const DelAudio2 = Delay({ delay: 8200 })(Audio2);

class Slide6 extends React.Component {

    render() {
        return (
            <div className={"train"}>
                <DelAudio />
                <DelAudio2 />
                <button className="main-button" onClick={this.props.nextSlide} >Dalje</button>
            </div>
        );
    }
}

export default Slide6;
