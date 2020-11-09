import React from "react";

import "./slide5.css"

class Slide5 extends React.Component {
    state = {
    };

    next = () => {
        this.props.nextSlide(6)
    };

    click = () => {
        console.log('nasao!');
    };

    render() {
        return (
            <div className={"wrapper-slide5"}>
                    <button onClick={this.next} >Next</button>
                    <div className={"s5slovo1"} onClick={this.click} ></div>
                    <div className={"s5slovo2"} onClick={this.click} ></div>
                    <div className={"s5slovo3"} onClick={this.click} ></div>
            </div>
        );
    }
}

export default Slide5;