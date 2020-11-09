import React from "react";

class Star extends React.Component {

    next = () => {
        this.props.nextSlide(7)
    };
    render() {
        return (
            <div className={"star"}>
                <button  onClick={this.next} >Next</button>
            </div>
        );
    }
}

export default Star;