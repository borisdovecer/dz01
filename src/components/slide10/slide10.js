import React from "react";
import Card from './card';
import Cards from "./Cards";
import './slide10.css';
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";
const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./17.opet igramo igru memorije pronadji dva ista slova.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

class Slide10 extends React.Component {
    state = {
        cards: Cards,
        arr: [],
        complete: false,
        completearr: []
    };

    flip = (e) => {
        let c = e.target.attributes
        let card = Cards
        if(!card[c.id.value - 1].ck) {
            if (c.name.value === "big") {
                card[c.id.value - 1].class = "karta-front-veliko-m flip-vertical-right";
                card[c.id.value - 1].ck = true
                this.state.arr.push(card[c.id.value - 1])
            }
            if (c.name.value === "small") {
                card[c.id.value - 1].class = "flip-vertical-right karta-front-malo-m";
                card[c.id.value - 1].ck = true
                this.state.arr.push(card[c.id.value - 1])
            }
            this.setState({cards: card})
            this.compare()
        }
    }

    compare = () => {
        let card = Cards
        if(this.state.arr.length === 2){
            if(this.state.arr[0].value === this.state.arr[1].value){
                card[this.state.arr[0].id - 1].found = true
                card[this.state.arr[1].id - 1].found = true
                this.state.completearr.push(card[this.state.arr[0].id - 1].found, card[this.state.arr[1].id - 1].found)
                if(card[this.state.arr[0].id - 1].value === "big"){
                    card[this.state.arr[0].id - 1].class = "karta-front-veliko-m pulsate-bck";
                    card[this.state.arr[1].id - 1].class = "karta-front-veliko-m pulsate-bck";
                }
                if(card[this.state.arr[0].id - 1].value === "small"){
                    card[this.state.arr[0].id - 1].class = "karta-front-malo-m pulsate-bck";
                    card[this.state.arr[1].id - 1].class = "karta-front-malo-m pulsate-bck";
                }
            } else {
                let id1 = this.state.arr[0].id;
                let id2 = this.state.arr[1].id;
                setTimeout( () => {
                    card[id1 - 1].class = "karta-back-zuta"
                    card[id2 - 1].class = "karta-back-zuta"
                    card[id1 - 1].ck = false
                    card[id2 - 1].ck = false
                    this.setState({cards:card, arr:[]})
                }, 1500)
            }
            this.setState({ cards: card, arr: []})
        }
        this.complete()


    }

    complete = () => {
        if(this.state.completearr.length === 4){
            this.setState({ complete: true })
        }
    }


    render() {
        return (
            <div className={"slide4 color-change-2x"}>
                <DelAudio />
                {this.state.complete ? <button className="main-button"
                                               onClick={this.props.nextSlide}>Dalje</button> : null}
                <div className={"row"} style={{paddingTop: '60px'}}>
                    {this.state.cards.map((crd,i) => <Card key={i} onClick={this.flip} data={crd}/>)}
                </div>
            </div>
        );
    }
}

export default Slide10;
