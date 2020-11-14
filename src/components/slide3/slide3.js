import React from "react";
import Crtanje from './draw';

class Slide3 extends React.Component {

    nasao = nesto => {
      console.log("nesto:" + nesto);
    };

    next = () => {
        this.props.nextSlide(4)
    };

    render() {
        return (
            <div className={"slide3"}>

                <button onClick={this.props.nextSlide} >Next</button>
                <Crtanje nesto={this.nasao}/>
            </div>
        );
    }


}

export default Slide3;
