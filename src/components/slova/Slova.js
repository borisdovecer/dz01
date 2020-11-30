import React from 'react'
import Delay from 'react-delay-render'

class Slova extends React.Component{
    state = {
        btn: false,
        image: "",
        audio: {
            upper: "",
            lower: "",
            delay: 0
        },
        veliko: "",
        malo: ""
    }

    componentDidMount() {
        if(this.props.slide === "a"){
            this.setState({
                image: "bg-slova-a.png",
                audio: { upper: "1.nase novo slovo je slovo A.mp3", lower:"2,a ovo je nase malo slovo a.mp3", delay: 6000 },
                veliko:"radno-01.png",
                malo: "radno-02.png"
            })
        }
        if(this.props.slide === "m"){
            this.setState({
                image: "bg-slova-m.png",
                audio: { upper: "12.nase novo slovo je slovo m kazi m.mp3", lower:"13.a ovo je nase malo slovo m kazi m.mp3", delay: 7000 },
                veliko:"radno-29.png",
                malo: "radno-30.png"
            })
        }
    }

    render() {
        const Veliko = () => <img src={'./slides/' + this.state.veliko} alt={"veliko"} className='veliko-slovo'/>
        const DelayedVeliko = Delay({ delay: 3000 })(Veliko);

        const Malo = () => <img src={'./slides/' + this.state.malo} alt={"malo"} className='malo-slovo'/>
        const DelayedMalo = Delay({ delay: 7000 })(Malo);

        const Audio2 = () => <audio autoPlay src={"./audio/" + this.state.audio.lower} />
        const DelayedAudio = Delay({ delay: this.state.audio.delay })(Audio2);

        const Btn = () => <button className="main-button" onClick={this.props.nextSlide}>Dalje</button>
        const DelayedBtn = Delay({ delay: 8500})(Btn)
        return(
            <div className={"main"}>
                <img src={'./slides/' + this.state.image} className="main-img" alt="img"/>
                <DelayedBtn />
                <DelayedVeliko />
                <DelayedMalo />
                <audio autoPlay src={"./audio/" + this.state.audio.upper} />
                <DelayedAudio />
            </div>
        )
    }

}

export default Slova
