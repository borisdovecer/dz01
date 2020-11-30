import React from 'react'
import ReciArr from "./ReciArr";
import Delay from "react-delay-render";

class Reci extends React.Component{
    state = {
        reci: ReciArr,
        word: 0
    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let rec = this.state.reci
        if(!rec[id].found){
            rec[id].found = true
            rec[id].animation = "jello-horizontal"
            this.setState(prevState => {return { reci: rec, word: prevState.word + 1}})
        }
    }

    render() {
        const Audio1 = () => <audio
            autoPlay
            src={"./audio/21.pritisni oblacic na kome pise am.mp3"}
        />
        const DelayedAudio = Delay({ delay: 5000 })(Audio1);

        return(
            <div className={"main"}>
                <img src={'./slides/bg-lastslide.png'} className="main-img" alt="img"/>
                {this.state.word === 5 ? <button className="main-button" onClick={this.props.nextSlide}>Dalje</button> : null}
                {this.state.reci.map( (rec, i) =>
                    <img key={i}
                         src={"./slides/" + rec.image}
                         className={rec.animation}
                         alt={"A"}
                         id={i}
                         name={rec.name}
                         style={{width:"11%", position:"absolute", marginTop:rec.top, left:rec.left}}
                         onClick={ this.state.word === i ? this.handleClick : null}
                    /> )}

                    {this.state.word === 0 ? <audio
                        autoPlay
                        src={"./audio/20.sada kada znamo dva slova hajde da ih citamo zajedno.mp3"}
                    /> : null}
                {this.state.word === 0 ? <DelayedAudio/> : null}
                {this.state.word === 1 ? <audio
                    autoPlay
                    src={"./audio/22.pritisni oblacic na kome pise ma.mp3"}
                /> : null}
                {this.state.word === 2 ? <audio
                    autoPlay
                    src={"./audio/23.pritisni oblacic na kome pise MAM.mp3"}
                /> : null}
                {this.state.word === 3 ? <audio
                    autoPlay
                    src={"./audio/23.pritisni oblacic na kome pise MAM.mp3"}
                /> : null}
                {this.state.word === 4 ? <audio
                    autoPlay
                    src={"./audio/24.pritisni oblacic na kome pise mama.mp3"}
                /> : null}

            </div>
        )
    }
}

export default Reci
