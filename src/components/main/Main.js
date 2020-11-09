import React from "react";

class Main extends React.Component {
    state = {

    };
    next = () => {
        this.props.nextSlide(1)
    };
    render() {
        return (
            <div className={"main"}>
                <div>
                    <button  onClick={this.next} >Start</button>


                </div>
            </div>
        );
    }
}

export default Main;