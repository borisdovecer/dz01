import React from 'react'
import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti'

class Main extends React.Component {
    state = {
        image: "",
        audio: "",
        confetti: false
    }

    componentDidMount()  {
        if(this.props.slide === "main"){
            this.setState({image: "bg-main.png", audio: "0.hajde da zapocnemo nase magicno putovanje i naucimo slova.mp3"})
        }
        if(this.props.slide === "train"){
            this.setState({image: "bg-voz.png", audio: "10.vidi vidi, neko nam dolazi. nasi drugari iz Savane.mp3"})
        }
        if(this.props.slide === "star"){
            this.setState({image: "bg-star.png", audio: "8.wow,naucili smo nase novo slovo.Fenomenalno, tako to rade sampioni.mp3", confetti: true})
        }
        if(this.props.slide === "pehar"){
            this.setState({image: "bg-pehar.png", audio: "26.kao i svaki sampion i ti dobijas pehar. bice ih jos mnogo mnogo vise. cestitamo.mp3", confetti: true})
        }
        if(this.props.slide === "medalja"){
            this.setState({image: "bg-medal.png", audio: "9. zasluzeno stize i zlatna dzivi medalje.mp3", confetti: true})
        }
    }

    render() {
        const { width, height } = useWindowSize;
        return(
            <div className="main">
                {this.state.confetti ? <Confetti width={width} height={height}/> : null}
                <img src={"./slides/" + this.state.image} className="main-img" alt="img" />
                <button className="main-button" onClick={this.props.nextSlide}>Dalje</button>
                <audio autoPlay src={"./audio/" + this.state.audio}/>
            </div>
        )
    }
}

export default Main
