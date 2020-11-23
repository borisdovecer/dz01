import React from "react";
import CanvasDraw from "react-canvas-draw";
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";

const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./5.hajde sada ti napisi nase slovo a.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

class Slide3 extends React.Component {

    render() {
        return (
            <div className="slide3">
                <DelAudio />
                <button style={{zIndex: "30"}} className="main-button" onClick={this.props.nextSlide}>Dalje</button>
                <div className="draw">
                    <CanvasDraw canvasWidth={"100%"} canvasHeight={700} brushColor={"#fff"} margin={"auto"} imgSrc={"./Picture4.jpg"} />
                </div>
            </div>
        );
    }
}

export default Slide3;
