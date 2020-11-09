import React from "react";
import Crtanje from './draw';

class Slide3 extends React.Component {
    state = {

    };

    nasao = nesto => {
      console.log("nesto:" + nesto);
    };

    next = () => {
        this.props.nextSlide(4)
    };

    render() {
        return (
            <div className={"slide3"}>

                <button onClick={this.next} >Next</button>
                <Crtanje nesto={this.nasao}/>
            </div>
        );
    }


}

export default Slide3;