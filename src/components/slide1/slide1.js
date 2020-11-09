import React from "react";
import Delay from 'react-delay-render';


const Veliko = () => (
        <h1 className='velikoa'>A</h1>
);
const DelayedA = Delay({ delay: 2000 })(Veliko);

const Malo = () => (
    <h1 className='maloa'>a</h1>
);
const Delayeda = Delay({ delay: 4000 })(Malo);

class Slide1 extends React.Component {
    state = {
        cek: 1000
    };

    next = () => {
        this.props.nextSlide(2)
    };

    render() {
        return (
            <div className={"slide1"}>
                <button onClick={this.next} >Next</button>
                <DelayedA />
                <Delayeda />
            </div>
        );
    }
}

export default Slide1;