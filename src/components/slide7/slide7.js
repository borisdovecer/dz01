import React from "react";
import Delay from 'react-delay-render';


const Veliko = () => (
    <h1 className='velikoa'>M</h1>
);
const DelayedM = Delay({ delay: 2000 })(Veliko);

const Malo = () => (
    <h1 className='maloa'>m</h1>
);
const Delayedm = Delay({ delay: 4000 })(Malo);

class Slide7 extends React.Component {

    next = () => {
        this.props.nextSlide(9)
    };

    render() {
        return (
            <div className={"slide7"}>
                <button onClick={this.next} >Next</button>
                <DelayedM />
                <Delayedm />
            </div>
        );
    }
}

export default Slide7;