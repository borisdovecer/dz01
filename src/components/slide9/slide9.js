import React from "react";
import Crtanje from './draw';
class Slide9 extends React.Component {
    state = {

    };

    next = () => {
        this.props.nextSlide(11)
    };

    render() {
        return (
            <div className={"slide9"}>

                <button onClick={this.next} >Next</button>
                <Crtanje/>
            </div>
        );
    }


}

export default Slide9;