import React from "react";

class Slide6 extends React.Component {

    next = () => {
        this.props.nextSlide(8)
    };
    render() {
        return (
            <div className={"train"}>
                <button  onClick={this.next} >Next</button>
            </div>
        );
    }
}

export default Slide6;