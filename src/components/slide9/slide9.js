import React from "react";
import CanvasDraw from "react-canvas-draw";
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./16.hajde sada ti napisi nase slovo m.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

class Slide9 extends React.Component {
    state = {

    };

    next = () => {
        this.props.nextSlide(11)
    };

    render() {
        return (
            <div className={"slide9"}>
                <DelAudio />
                <button style={{zIndex: "30"}} className="main-button" onClick={this.props.nextSlide}>Dalje</button>
                <div className="draw">
                    <CanvasDraw canvasWidth={"100%"} canvasHeight={700} brushColor={"#fff"} margin={"auto"} imgSrc={"./tabla.jpg"} />
                </div>
            </div>
        );
    }


}

export default Slide9;
