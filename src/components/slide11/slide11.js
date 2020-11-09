import React from "react";

import "./slide11.css"

class Slide11 extends React.Component {
    state = {
    };

    next = () => {
        this.props.nextSlide(13)
    };

    click = () => {
        console.log('nasao!');
    };

    render() {
        return (
            <div className={"slide11"}>
                <div >
                    <button onClick={this.next} >Next</button>
                </div >
                <div className={"wrapper-slide11"}>
                    <div className={"s5slovo1"} onClick={this.click} ></div>
                    <div className={"s5slovo2"} onClick={this.click} ></div>
                    <div className={"s5slovo3"} onClick={this.click} ></div>
                </div>
            </div>
        );
    }
}

export default Slide11;