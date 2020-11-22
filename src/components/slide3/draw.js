import React from "react";
import useMouse from "@react-hook/mouse-position";

class Crtanje extends React.Component{
    state = {
        found: false,
        x1: false,
        x2: false
    }

    nesto = (mouse) => {

            if(mouse.clientX > 850 && mouse.clientX < 890 && mouse.clientY > 300 && mouse.clientY < 330){

                this.setState({x1: true});
            } else {
            if(mouse.clientX > 930 && mouse.clientX < 970 && mouse.clientY > 180 && mouse.clientY < 220){
                this.setState({x2: true});
            }
            }
    };

    render () {
        return(
            <Draw test={this.nesto}  />
        )
    }
}

const Draw = (props) => {
    const target = React.useRef(null);
    let drawPts = React.useRef([]);
    const mouse = useMouse(target, {
        fps: Infinity,
        enterDelay: 0,
        leaveDelay: 0
    });

    if (mouse.isDown) {
        // An array is a terrible data structure for this :P
        if (drawPts.current.length === 1000) drawPts.current.shift();
        drawPts.current.push(mouse);
    }

    const drawing = [];

    for (let i = 0; i < drawPts.current.length; i++) {
        const { x, y } = drawPts.current[i];
        if(mouse.clientX > 850 && mouse.clientX < 890 && mouse.clientY > 300 && mouse.clientY < 330){

        }
        drawing.push(
            <div
                key={i}
                style={{
                    position: "absolute",
                    left: Math.min(x),
                    top: Math.min(y),
                    width: 12,
                    height: 12,
                    backgroundColor: "#e0e21b",
                    borderRadius: 1000
                }}
            />
        );
    }

    return (
            <div onClick={() => props.test(mouse)} className={"cls"} ref={target}>
                <img src="./Picture4.jpg" className="main" alt="img"/>

                {drawing}
            </div>
    );
};



export default Crtanje;
