import React from "react";
import Delay from 'react-delay-render';
import ReactAudioPlayer from "react-audio-player";

const Veliko = () => <img src='./radno-29.png' className='veliko-m'/>

const DelayedVeliko = Delay({ delay: 3500 })(Veliko);

const Malo = () => <img src='./radno-30.png' className='malo-m'/>
const DelayedMalo = Delay({ delay: 8000 })(Malo);

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./12.nase novo slovo je slovo m kazi m.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

const Audio2 = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./13.a ovo je nase malo slovo m kazi m.mp3"
    preload={"auto"}
/>
const DelAudio2 = Delay({ delay: 7500 })(Audio2);

class Slide7 extends React.Component {
    state = {
        btn: false
    }
    componentDidMount() {
        setTimeout( () => {
            this.setState({btn: true})
        }, 1000)
    }

    render() {
        return (
            <div className={"slide7"}>
                {this.state.btn ? <button className="main-button" onClick={this.props.nextSlide}>Dalje </button> : null}
                <DelayedVeliko />
                <DelayedMalo />
                <DelAudio />
                <DelAudio2 />
            </div>
        );
    }
}

export default Slide7;
