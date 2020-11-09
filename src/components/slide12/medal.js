import React from "react";

class Medal extends React.Component {

    next = () => {
        this.props.nextSlide(0)
    };
    render() {
        return (
            <div className={"medal"}>
                <button  onClick={this.next} >Next</button>
            </div>
        );
    }
}

export default Medal;