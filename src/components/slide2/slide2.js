import React from "react";

import './slide2.css';


const btn = [
    {
        id:"1",
        hidden:""
    },
    {
        id:"2",
        hidden:""
    },
    {
        id:"3",
        hidden:""
    },
    {
        id:"4",
        hidden:""
    },
    {
        id:"5",
        hidden:""
    },
    {
        id:"6",
        hidden:""
    },
    {
        id:"7",
        hidden:""
    }
];


class Slide2 extends React.Component {
    state = {
        btn: btn
    };

    next = () => {
        this.props.nextSlide(3)
    };


    hidden = (e) => {
        if(e.target.id === "1"){
            btn[0].hidden = "hidden";
        }
        if(e.target.id === "3"){
            btn[2].hidden = "hidden";
        }
        if(e.target.id === "5"){
            btn[4].hidden = "hidden";
        }
        if(e.target.id === "7"){
            btn[6].hidden = "hidden";
        }
        this.setState({ btn: btn });
    };

    render() {
        return (
                <div className={"slide2"}>
                    <button style={{marginBottom:"35px"}} onClick={this.next} >Next</button>
                    <div className="wrapper-slide2">
                        <h1 className={this.state.btn[0].hidden + ' slovo1a'} id="1" onClick={this.hidden}>A</h1>
                        <h1 className={this.state.btn[1].hidden + ' slovo2a'} id="2">a</h1>
                        <h1 className={this.state.btn[2].hidden + ' slovo3a' } id="3" onClick={this.hidden}>A</h1>
                        <h1 className={this.state.btn[3].hidden + ' slovo4a' } id="4">a</h1>
                        <h1 className={this.state.btn[4].hidden + ' slovo5a' } id="5" onClick={this.hidden}>A</h1>
                        <h1 className={this.state.btn[5].hidden + ' slovo6a' } id="6">a</h1>
                        <h1 className={this.state.btn[6].hidden + ' slovo7a'}  id="7" onClick={this.hidden}>A</h1>
                    </div>
                </div>
        );
    }


}

export default Slide2;