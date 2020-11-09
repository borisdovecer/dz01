import React from "react";
import ReactDelayRender from 'react-delay-render';


const card = [
    {
        id:"1",
        name:"cardback",
        ck:false
    },
    {
        id:"2",
        name:"cardback",
        ck:false
    },
    {
        id:"3",
        name:"cardback",
        ck:false
    },
    {
        id:"4",
        name:"cardback",
        ck:false
    }
];


class Card extends React.Component {
    state = {
        card: card,
        check: []
    };


    flip = (e) => {
        if(this.state.check.length < 2){

            if(e.target.id === "1"){
                card[0].name = "cardfront";
                this.state.check.push({ id: 1, value: e.target.attributes.name.value });
            }
            if(e.target.id === "2"){
                card[1].name = "cardfront";
                this.state.check.push({ id: 2, value: e.target.attributes.name.value });
            }
            if(e.target.id === "3"){
                card[2].name = "cardfront2";
                this.state.check.push({ id: 3, value: e.target.attributes.name.value });
            }
            if(e.target.id === "4"){
                card[3].name = "cardfront2";
                this.state.check.push({ id: 4, value: e.target.attributes.name.value });
            }
            this.compare();
            this.sflip();
        } else {
            card.forEach(function (v) {
                if(v.ck === false){
                    v.name='cardback';
                }
            });
            this.sflip();
            this.setState({ check: []});

        }

    };

    compare = () => {

        if(this.state.check.length > 1  && this.state.check[0].value === this.state.check[1].value){
            const id1 = this.state.check[0].id;
            const id2 = this.state.check[1].id;
            card.forEach(function (v) {

                // eslint-disable-next-line
                if(id1 == v.id){
                    v.ck = true;
                }
                // eslint-disable-next-line
                if(v.id == id2){
                    v.ck = true;
                }

            });

        }
    };

    sflip = () => this.setState({ card: card});

    render() {

        return (
            <div className="wrapper-slider4">
                <div className="pos1">
                    <div className={this.state.card[0].name } id='1' name="A" onClick={this.flip}></div>
                </div>
                <div className="pos2">
                    <div className={this.state.card[1].name} id='2' name="A" onClick={this.flip}></div>
                </div>
                <div className="pos3">
                    <div className={this.state.card[2].name} id='3' name="a" onClick={this.flip}></div>
                </div>
                <div className="pos4">
                    <div className={this.state.card[3].name} id='4' name="a" onClick={this.flip}></div>
                </div>

            </div>

        );
    }
}

export default ReactDelayRender({ delay: 1000 })(Card);