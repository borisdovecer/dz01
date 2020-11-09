import React from "react";
import Card from './card';
import './slide4.css';


class Slide4 extends React.Component {
    state = {
    };

    next = () => {
        this.props.nextSlide(5)
    };

    render() {
        return (
            <div className={"slide4"}>
                    <button  onClick={this.next} >Next</button>
                    <Card />
            </div>
        );
    }
}

export default Slide4;