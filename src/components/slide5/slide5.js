import React from "react";
import "./slide5.css"
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";
const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./7.sakrivla se nasa nestasna slova.pritisni svako slovo koje nadjes.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

const slova = [
    {
        id: 1,
        animation: "",
        class: "s5slovo1 "
    },
    {
        id: 2,
        animation: "",
        class: "s5slovo2 "
    },
    {
        id: 3,
        animation: "",
        class: "s5slovo3 "
    }
]

class Slide5 extends React.Component {
    state = {
        slova: slova
    };



    click = (e) => {
        let s = e.target.attributes
        slova[s.id.value].animation = "rotate-scale-up"
        this.setState({slova: slova})
    };

    render() {
        return (
            <div className={"wrapper-slide5"}>
                <DelAudio/>
                <img src="./Picture6.jpg"  className="main-img"  alt="img"/>
                <button className="main-button"  onClick={this.props.nextSlide} >Next</button>
                <img src="./s5va.png" alt="none" className={this.state.slova[0].class + this.state.slova[0].animation} id="0" onClick={this.click} />
                <img src="./s5va.png" alt="none"  className={this.state.slova[1].class + this.state.slova[1].animation} id="1" onClick={this.click} />
                <img src="./s5va.png" alt="none"  className={this.state.slova[2].class + this.state.slova[2].animation} id="2" onClick={this.click} />
            </div>
        );
    }
}

export default Slide5;
