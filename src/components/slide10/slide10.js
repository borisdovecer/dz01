import React from "react";
import Card from './card';
import './slide10.css';


class Slide10 extends React.Component {
    state = {
    };

    next = () => {
        this.props.nextSlide(12)
    };

    render() {
        return (
            <div className={"slide10"}>
                <button  onClick={this.next} >Next</button>
                <Card />
            </div>
        );
    }
}

export default Slide10;