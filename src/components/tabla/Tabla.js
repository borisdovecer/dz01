import React from 'react'
import CanvasDraw from "react-canvas-draw"

class Tabla extends React.Component{
    state = {
        image: "",
        audio: ""
    }

    componentDidMount() {
        if(this.props.slide === "a"){
            this.setState({ image: "bg-tabla-a.png", audio:"5.hajde sada ti napisi nase slovo a.mp3"})
        }
        if(this.props.slide === "m"){
            this.setState({ image: "bg-tabla-m.png", audio:"16.hajde sada ti napisi nase slovo m.mp3"})
        }
    }

    render() {
        return(
            <div className="main">
                <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/>
                <img src={"./slides/clear.png"} alt="clr" onClick={() => { this.saveableCanvas.clear(); }}  className="main-button" style={{left:"9%", marginTop: "8%", width:"5%"}}  />
                <img src={"./slides/" + this.state.image} className="main-img" alt="img" />
                <CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    canvasWidth={"100%"}
                    canvasHeight={900}
                    brushColor={"#fff"}
                    margin={"auto"}
                    lazyRadius={1}
                />
                <audio autoPlay src={"./audio/" + this.state.audio} />
            </div>
        )
    }
}

export default Tabla
