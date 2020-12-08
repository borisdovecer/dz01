import React from 'react'
import SlovaA from './SlovaA'
import SlovaM from "./SlovaM";

class Skrivalice extends React.Component{
    state = {
        image: "",
        audio: "",
        slovoImg: "",
        slova: SlovaA,
        completearr: [],
        complete: false
    }
    componentDidMount() {
        if(this.props.slide === "a"){
            this.setState({ image: "bg-livada.png", audio:"7.sakrivla se nasa nestasna slova.pritisni svako slovo koje nadjes.mp3", slovoImg: "a.png", slova:SlovaA })
        }
        if(this.props.slide === "m"){
            this.setState({ image: "bg-most.png", audio:"18.nasa slova bas vole da se igraju zmurke pritisni svako slovo koje vidis.mp3", slovoImg: "m.png", slova:SlovaM })
        }
    }

    click = (e) => {
        let s = e.target.attributes
        let Slova = this.state.slova

        if(Slova[s.id.value].found === false) {
            Slova[s.id.value].animation = "rotate-scale-up"
            Slova[s.id.value].found = true
            this.state.completearr.push(Slova[s.id.value])
            this.setState({slova: Slova})
        }
        this.complete()
    };

    complete = () => {
        if(this.state.completearr.length === 3){
            this.setState({ complete: true })
        }
    }

    render() {
        return(
            <div className={"main"}>
                <img src={'./slides/' + this.state.image} className="main-img" alt="img"/>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                {this.state.slova.map( (slovo, i) => <img
                    key={i}
                    src={"./slides/" + this.state.slovoImg}
                    alt={"slovo"}
                    className={slovo.animation}
                    id={i}
                    style={{width:"7%", position:"absolute", marginTop:slovo.top, left:slovo.left}}
                    onClick={this.click}
                /> )}
                <audio
                    autoPlay
                    src={"./audio/" + this.state.audio}
                />
            </div>
        )
    }
}

export default Skrivalice
