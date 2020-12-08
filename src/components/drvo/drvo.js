import React from 'react'
import SlovaA from "./SlovaA";
import SlovaM from "./SlovaM";

class Drvo extends React.Component {
    state = {
        image: "",
        audio1: "",
        audio2: "",
        slova: [],
        position: [],
        upperComplete: false,
        lowerComplete: false,
        uparr: [],
        lowarr: []
    }

    componentDidMount() {
        if(this.props.slide === "a"){
            this.setState({
                image: "drvo.jpg",
                audio1: "3.pritisni svako veliko slovo A koje vidis na drvetu.mp3",
                audio2:"4.pritisni svako malo slovo a koje vidis na drvetu.mp3",
                slova: SlovaA.sort(() => Math.random() - 0.5),
                position: [
                    { top: "7%", left: "47%" },
                    { top: "11%", left: "38.5%" },
                    { top: "11%", left: "55.5%" },
                    { top: "20%", left: "32.5%" },
                    { top: "20%", left: "43%" },
                    { top: "20%", left: "52%" },
                    { top: "20%", left: "60.5%" },
                ]
            })
        }
        if(this.props.slide === "m"){
            this.setState({
                image: "drvo2.jpg",
                audio1: "14.pritisni svako veliko slovo m koje vidis na drvetu.mp3",
                audio2: "15.pritisni svako malo slovo m koje vidis na drvetu.mp3",
                slova: SlovaM.sort(() => Math.random() - 0.5),
                position: [
                    { top: "5.5%", left: "47.2%" },
                    { top: "11%", left: "37.2%" },
                    { top: "11%", left: "57%" },
                    { top: "20%", left: "32%" },
                    { top: "20%", left: "42%" },
                    { top: "20%", left: "52%" },
                    { top: "20%", left: "62%" },
                ]
            })
        }
    }

    handleClick = (e) => {
        let mee = this.state.slova
        let arr = this.state.uparr
        let arrlow = this.state.lowarr
        let t = e.target.attributes

        if(t.value.value === "upper" && mee[t.id.value].found === false){
            mee[t.id.value].hidden = "puff-out-center"
            mee[t.id.value].found = true
            arr.push(mee[t.id.value].found)
            this.setState({btn:mee, uparr:arr})
        }
        this.upperCheck()

        if(this.state.upperComplete){
            if(t.value.value === "lower" && mee[t.id.value].found === false){
                mee[t.id.value].hidden = "puff-out-center"
                mee[t.id.value].found = true
                arrlow.push(mee[t.id.value].found)
                this.setState({btn:mee, lowarr:arrlow})
            }
        }
        this.lowCheck()
    };

    upperCheck = () => {
        if(this.state.uparr.length === 4){
            this.setState({ upperComplete: true })
        }
    }

    lowCheck = () => {
        if(this.state.upperComplete && this.state.lowarr.length === 3){
            this.setState({ lowerComplete: true })
        }
    }

    render() {

        return(
            <div className={"main"} style={{textAlign:"center"}}>
                <img src={"./slides/" + this.state.image} style={{width:"50%", position:"relative"}} className="main-img" alt="img" />
                {this.state.lowerComplete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}

                {this.state.slova.map( (slovo, i) =>
                    <img key={i}
                         src={"./slides/" + slovo.class}
                         className={slovo.hidden}
                         alt={"A"}
                         id={i}
                         value={slovo.value}
                         style={{width:"7%", position:"absolute", marginTop:this.state.position[i].top, left:this.state.position[i].left}}
                         onClick={this.handleClick}
                    /> )}
                <audio
                    autoPlay
                    src={"./audio/" + this.state.audio1}
                />
                {this.state.upperComplete ? <audio
                    autoPlay
                    src={"./audio/" + this.state.audio2}
                /> : null}
            </div>
        )
    }
}

export default Drvo
