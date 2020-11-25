import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./25,wow pa ti vec znas da citas.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 300 })(Audio);

const Audio2 = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./26.kao i svaki sampion i ti dobijas pehar. bice ih jos mnogo mnogo vise. cestitamo.mp3"
    preload={"auto"}
/>
const DelAudio2 = Delay({ delay: 5500 })(Audio2);

class Pehar extends React.Component {

    render() {
        return (
            <div className="pehar">
                <DelAudio />
                <DelAudio2 />

                <img src="./pehar.png" alt="img" />
                <button className="main-button" onClick={this.props.nextSlide} >Start</button>
            </div>
        );
    }
}

export default Pehar;
