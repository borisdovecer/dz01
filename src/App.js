import React from 'react'
import Start from './components/main/Start'
import Main from './components/main/Main'
import Slova from './components/slova/Slova'
import Drvo from './components/drvo/drvo'
import Tabla from "./components/tabla/Tabla"
import Karte from "./components/karte/Karte"
import Skrivalice from "./components/skrivalice/Skrivalice"
import Reci from "./components/reci/Reci"
import Video from './components/video/Video'

import './App.css'
import './bootstrap.css'

class App extends React.Component {
  state = {
    slide: 99
  };

  nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

  backToMain = () => this.setState({ slide:0})

  render() {
      return (
        <div style={{width: "100%"}} >
          { this.state.slide === 99 ? <Start start={this.backToMain} /> : null}
          { this.state.slide === 0 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 1 ? <Slova slide={"a"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 2 ? <Drvo slide={"a"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 3 ? <Tabla slide={"a"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 4 ? <Karte slide={"a"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 5 ? <Skrivalice slide={"a"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 6 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 7 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 8 ? <Slova slide={"m"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 9 ? <Drvo slide={"m"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 10 ? <Tabla slide={"m"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 11 ? <Karte slide={"m"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 12 ? <Skrivalice slide={"m"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 13 ? <Main slide={"medalja"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 14 ? <Reci nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 15 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 16 ? <Video end={this.backToMain}/> : null}
        </div>
    );
  }
}

export default App;
