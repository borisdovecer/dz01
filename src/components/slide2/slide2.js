import React from "react";
import Slova from "./Slova"
import './slide2.css';
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./3.pritisni svako veliko slovo A koje vidis na drvetu.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);


class Slide2 extends React.Component {
    state = {
        btn: Slova,
    };

    handleClick = (e) => {
        let mee = Slova;
        let t = e.target.attributes;
        if(t.name.value === "A"){
            mee[t.id.value].hidden = "puff-out-center";
            this.setState({btn:mee})
        }
    };

    render() {
        return (
            <div className="slide2 ">
                <DelAudio />
                <img src="./drvo.jpg" className="slide2-img" alt="img"/>
                <button className="main-button" onClick={this.props.nextSlide} >Next</button>
                    <img src="radno-01.png" alt="a" className={"slovo1a " + this.state.btn[0].hidden} id="0" name="A" onClick={this.handleClick} />
                    <img src="radno-02.png" alt="a" className={"slovo2a " + this.state.btn[1].hidden} id="1" />
                    <img  src="radno-01.png" alt="a"  className={'slovo3a ' + this.state.btn[2].hidden}  id="2" name="A" onClick={this.handleClick}/>
                    <img src="radno-02.png" alt="a" className={'slovo4a ' + this.state.btn[3].hidden} id="3" />
                    <img  src="radno-01.png" alt="a"  className={'slovo5a ' + this.state.btn[4].hidden} id="4" name="A" onClick={this.handleClick}/>
                    <img src="radno-02.png" alt="a"  className={'slovo6a ' + this.state.btn[5].hidden } id="5"/>
                    <img  src="radno-01.png" alt="a"   className={'slovo7a ' + this.state.btn[6].hidden } id="6" name="A" onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Slide2;
