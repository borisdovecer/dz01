import React from "react";
import Slova from './Slova'
import "./slide11.css"
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";
const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./18.nasa slova bas vole da se igraju zmurke pritisni svako slovo koje vidis.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

class Slide11 extends React.Component {
    state = {
        slova: Slova,
        completearr: [],
        complete: false
    };

    click = (e) => {
        let s = e.target.attributes
        Slova[s.id.value].animation = "rotate-scale-up"
        this.state.completearr.push(Slova[s.id.value])
        this.setState({slova: Slova})

        this.complete()
    };

    complete = () => {
        if(this.state.completearr.length === 3){
            this.setState({ complete: true })
        }
    }

    render() {
        return (
            <div className={"slide11"}>

                <div className={"wrapper-slide5"}>
                    {this.state.complete ? <button className="main-button" onClick={this.props.nextSlide}>Next</button> : null}
                    <DelAudio/>
                    <img src="./slajd11.jpg"  className="main-img"  alt="img"/>
                    {this.state.complete ? <button className="main-button" onClick={this.props.nextSlide}>Next</button> : null}
                    <img src="./s5va.png" alt="none" className={this.state.slova[0].class + this.state.slova[0].animation} id="0" onClick={this.click} />
                    <img src="./s5va.png" alt="none"  className={this.state.slova[1].class + this.state.slova[1].animation} id="1" onClick={this.click} />
                    <img src="./s5va.png" alt="none"  className={this.state.slova[2].class + this.state.slova[2].animation} id="2" onClick={this.click} />
                </div>
            </div>
        );
    }
}

export default Slide11;
