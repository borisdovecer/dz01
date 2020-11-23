import React from "react";
import Delay from 'react-delay-render';
import ReactAudioPlayer from "react-audio-player";

const Veliko = () => <img src='./radno-01.png' className='velikoa'/>

const DelayedA = Delay({ delay: 3500 })(Veliko);

const Malo = () => <img src='./radno-02.png' className='maloa'/>
const Delayeda = Delay({ delay: 8000 })(Malo);

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./1.nase novo slovo je slovo A.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

const Audio2 = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./2,a ovo je nase malo slovo a.mp3"
    preload={"auto"}
/>
const DelAudio2 = Delay({ delay: 7500 })(Audio2);

class Slide1 extends React.Component{

    state = {
        btn: false
    }
    componentDidMount() {
        setTimeout( () => {
            this.setState({btn: true})
        }, 1000)
    }

    render(){
         return (
                <div className={"main"}>
                    <img src="./Picture2.jpg" className="main-img" alt="img"/>
                    {this.state.btn ? <button className="main-button" onClick={this.props.nextSlide}>Dalje </button> : null}
                    <DelayedA />
                    <Delayeda />
                    <DelAudio />
                    <DelAudio2 />
                </div>
         );
    }
}

export default Slide1;
