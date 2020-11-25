import React from "react";
import Reci from './reci'
import Delay from 'react-delay-render';
import ReactAudioPlayer from "react-audio-player";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./20.sada kada znamo dva slova hajde da ih citamo zajedno.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

const Audio2 = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./21.pritisni oblacic na kome pise am.mp3"
    preload={"auto"}
/>
const DelAudio2 = Delay({ delay: 6500 })(Audio2);

class Slide13 extends React.Component{
    state = {
        reci: Reci,
        btn: true
    }

    handleClick = (e) => {
        if(e.target.attributes.name.value === Reci[e.target.attributes.id.value].name && !Reci[e.target.attributes.id.value].found){
            Reci[e.target.attributes.id.value].found = true
            Reci[e.target.attributes.id.value].animation = "jello-horizontal"
            this.setState({reci: Reci})
        }
    }

    render(){
        return (
            <div className={"main"}>
                <img src="./lastslide.jpg" className="main-img" alt="img"/>
                {this.state.reci[4].found ? <button className="main-button" onClick={this.props.nextSlide}>Dalje </button> : null}
                <img src="/am.png" alt="a" className={"rec-am " + this.state.reci[0].animation} id="0" name={this.state.reci[0].name } onClick={this.handleClick} />
                <img src="/ma.png" alt="a" className={"rec-ma "+ this.state.reci[1].animation} id="1" name={this.state.reci[1].name} onClick={this.state.reci[0].found ? this.handleClick : null}  />
                <img src="/ama.png" alt="a" className={"rec-ama " + this.state.reci[2].animation} id="2" name={this.state.reci[2].name}  onClick={this.state.reci[1].found ? this.handleClick : null} />
                <img src="/mam.png" alt="a" className={"rec-mam " + this.state.reci[3].animation} id="3" name={this.state.reci[3].name } onClick={this.state.reci[2].found ? this.handleClick : null} />
                <img src="/mama.png" alt="a" className={"rec-mama " + this.state.reci[4].animation} id="4" name={this.state.reci[4].name } onClick={this.state.reci[3].found ? this.handleClick : null} />

                <DelAudio />
                <DelAudio2 />

                {this.state.reci[0].found ? <ReactAudioPlayer
                    autoPlay={true}
                    onPlay={e => console.log("onPlay")}
                    src="./22.pritisni oblacic na kome pise ma.mp3"
                    preload={"auto"}
                /> : null}
                {this.state.reci[1].found ? <ReactAudioPlayer
                    autoPlay={true}
                    onPlay={e => console.log("onPlay")}
                    src="./24.pritisni oblacic na kome pise mama.mp3"
                    preload={"auto"}
                /> : null}
                {this.state.reci[2].found ? <ReactAudioPlayer
                    autoPlay={true}
                    onPlay={e => console.log("onPlay")}
                    src="./23.pritisni oblacic na kome pise MAM.mp3"
                    preload={"auto"}
                /> : null}
                {this.state.reci[3].found ? <ReactAudioPlayer
                    autoPlay={true}
                    onPlay={e => console.log("onPlay")}
                    src="./24.pritisni oblacic na kome pise mama.mp3"
                    preload={"auto"}
                /> : null}
            </div>
        );
    }
}

export default Slide13;
