import React from "react";

import "./slide5.css"

class Slide5 extends React.Component {
    state = {
    };

    next = () => {
        this.props.nextSlide(6)
    };

    click = () => {
        console.log('nasaooo!');
    };

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 wrapper-slide5"}>
                                <button onClick={this.next} >Next</button>
                                <div className={"s5slovo1"} onClick={this.click} ></div>
                                <div className={"s5slovo2"} onClick={this.click} ></div>
                                <div className={"s5slovo3"} onClick={this.click} ></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide5;