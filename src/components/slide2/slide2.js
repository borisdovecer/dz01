import React from "react";
import Slova from "./Slova"
import './slide2.css';
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./14.pritisni svako veliko slovo m koje vidis na drvetu.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);


class Slide2 extends React.Component {
    state = {
        btn: Slova,
        upperComplete: false,
        lowerComplete: true,
        uparr: [],
        lowarr: []
    };

    handleClick = (e) => {
        let mee = Slova;
        let arr = this.state.uparr
        let arrlow = this.state.lowarr
        let t = e.target.attributes;
        if(t.name.value === "A"){
            mee[t.id.value].hidden = "puff-out-center";
            mee[t.id.value].found = true;
            arr.push(mee[t.id.value].found)
            this.setState({btn:mee, uparr:arr})
        }
        this.upperCheck()

        if(this.state.upperComplete){
            if(t.name.value === "a"){
                mee[t.id.value].hidden = "puff-out-center";
                mee[t.id.value].found = true;
                arrlow.push(mee[t.id.value].found)
                this.setState({btn:mee, lowarr:arrlow})
            }
        }
        this.lowCheck()


    };

    upperCheck = () => {
        if(this.state.uparr.length === 4){
            this.setState({ upperComplete: true })
        }
    }

    lowCheck = () => {
        if(this.state.upperComplete && this.state.lowarr.length === 3){
            this.setState({ lowerComplete: true })
        }
    }

    render() {
        return (
            <div className="slide2 ">
                <DelAudio />
                {this.state.upperComplete ? <ReactAudioPlayer
                    autoPlay={true}
                    onPlay={e => console.log("onPlay")}
                    src="./4.pritisni svako malo slovo a koje vidis na drvetu.mp3"
                    preload={"auto"}
                /> : null}
                <img src="./drvo.jpg" className="slide2-img" alt="img"/>
                 { this.state.lowerComplete ? <button className="main-button" onClick={this.props.nextSlide}>Dalje</button> : null}

                    <img src="radno-01.png" alt="a" className={"slovo1a " + this.state.btn[0].hidden} id="0" name={this.state.btn[0].value} onClick={this.handleClick} />
                    <img src="radno-02.png" alt="a" className={"slovo2a " + this.state.btn[1].hidden} id="1" name={this.state.btn[1].value} onClick={this.handleClick} />
                    <img  src="radno-01.png" alt="a"  className={'slovo3a ' + this.state.btn[2].hidden}  id="2" name={this.state.btn[2].value} onClick={this.handleClick}/>
                    <img src="radno-02.png" alt="a" className={'slovo4a ' + this.state.btn[3].hidden} id="3"  name={this.state.btn[3].value} onClick={this.handleClick}/>
                    <img  src="radno-01.png" alt="a"  className={'slovo5a ' + this.state.btn[4].hidden} id="4" name={this.state.btn[4].value} onClick={this.handleClick}/>
                    <img src="radno-02.png" alt="a"  className={'slovo6a ' + this.state.btn[5].hidden } id="5" name={this.state.btn[5].value} onClick={this.handleClick}/>
                    <img  src="radno-01.png" alt="a"   className={'slovo7a ' + this.state.btn[6].hidden } id="6" name={this.state.btn[6].value} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Slide2;
