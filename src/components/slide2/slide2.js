import React from "react";
import Slova from "./Slova"
import './slide2.css';

class Slide2 extends React.Component {
    state = {
        btn: Slova,
    };

    handleClick = (e) => {
        let mee = Slova;
        let t = e.target.attributes;
        if(t.name.value === "A"){
            mee[t.id.value].hidden = "puff-out-center";
            this.setState({btn:mee})
        }
    };

    render() {
        return (
            <div className={"slide2"}>
                <button style={{marginBottom:"35px"}} onClick={this.props.nextSlide} >Next</button>
                <div className="wrapper-slide2">
                    <h1 className={"slovo1a " + this.state.btn[0].hidden} id="0" name="A" onClick={this.handleClick} >A</h1>
                    <h1 className={"slovo2a " + this.state.btn[1].hidden} id="1">a</h1>
                    <h1 className={'slovo3a ' + this.state.btn[2].hidden}  id="2" name="A" onClick={this.handleClick}>A</h1>
                    <h1 className={'slovo4a ' + this.state.btn[3].hidden} id="3">a</h1>
                    <h1 className={'slovo5a ' + this.state.btn[4].hidden} id="4" name="A" onClick={this.handleClick}>A</h1>
                    <h1 className={'slovo6a ' + this.state.btn[5].hidden } id="5">a</h1>
                    <h1 className={'slovo7a ' + this.state.btn[6].hidden } id="6" name="A" onClick={this.handleClick}>A</h1>
                </div>
            </div>
        );
    }
}

export default Slide2;
