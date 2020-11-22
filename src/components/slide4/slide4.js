import React from "react";
import Card from './card';
import Cards from "./Cards";
import './slide4.css';
import ReactAudioPlayer from "react-audio-player";
import Delay from "react-delay-render";
const Audio = () => <ReactAudioPlayer
    autoPlay={true}
    onPlay={e => console.log("onPlay")}
    src="./6.sada cemo da igramo igru memorije, pronadji dva ista slova.mp3"
    preload={"auto"}
/>
const DelAudio = Delay({ delay: 500 })(Audio);

class Slide4 extends React.Component {

    state = {
        cards: Cards,
        arr: [],
    };

    flip = (e) => {
        let c = e.target.attributes
        let card = Cards
        if(!card[c.id.value - 1].ck) {
            if (c.name.value === "big") {
                card[c.id.value - 1].class = "cardfront flip-vertical-right";
                this.state.arr.push(card[c.id.value - 1])
            }
            if (c.name.value === "small") {
                card[c.id.value - 1].class = "flip-vertical-right cardfront2";
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
                card[this.state.arr[0].id - 1].ck = true
                card[this.state.arr[1].id - 1].ck = true
                if(card[this.state.arr[0].id - 1].value === "big"){
                    card[this.state.arr[0].id - 1].class = "cardfront pulsate-bck";
                    card[this.state.arr[1].id - 1].class = "cardfront pulsate-bck";
                }
                if(card[this.state.arr[0].id - 1].value === "small"){
                    card[this.state.arr[0].id - 1].class = "cardfront2 pulsate-bck";
                    card[this.state.arr[1].id - 1].class = "cardfront2 pulsate-bck";
                }
            } else {
                let id1 = this.state.arr[0].id;
                let id2 = this.state.arr[1].id;
                setTimeout( () => {
                    card[id1 - 1].class = "cardback"
                    card[id2 - 1].class = "cardback"
                    this.setState({cards:card, arr:[]})
                }, 1500)
            }
            this.setState({ cards: card, arr: []})
        }
    }

    render() {
        return (
            <div className={"slide4 color-change-2x"}>
                <DelAudio />
                <button onClick={this.props.nextSlide} >Next</button>
                <div className={"row"}>
                    {this.state.cards.map((crd,i) => <Card key={i} onClick={this.flip} data={crd}/>)}
                </div>
            </div>
        );
    }
}

export default Slide4;
