import React from "react";
import Delay from 'react-delay-render';
import ReactAudioPlayer from 'react-audio-player';

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./0.hajde da zapocnemo nase magicno putovanje i naucimo slova.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 300 })(Audio);

class Main extends React.Component{
    state = {
        audio: false
    }


    render(){
        return (
            <div className="main">
                <DelAudio />

                <img src="./Picture1.jpg" className="main-img" alt="img" />
                <button className="main-button" onClick={this.props.nextSlide} >Start</button>
            </div>

        );
    }
}

export default Main;
