import React from 'react';
import Main from './components/main/Main';
import Slide1 from './components/slide1/slide1';
import Slide2 from './components/slide2/slide2';
import Slide3 from './components/slide3/slide3';
import Slide4 from './components/slide4/slide4';
import Slide5 from './components/slide5/slide5';
import Star from './components/star/star';
import Slide6 from './components/slide6/slide6';
import Slide7 from './components/slide7/slide7';
import Slide8 from './components/slide8/slide8';
import Slide9 from './components/slide9/slide9';
import Slide10 from './components/slide10/slide10';
import Slide11 from './components/slide11/slide11';
import Slide12 from './components/slide12/medal';
import Slide13 from "./components/slide13/slide13";
import Pehar from "./components/pehar/pehar"
import Video from "./components/video/video"

import './App.css';
import './bootstrap.css'

class App extends React.Component {
    state = {
        slide: 0
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )


    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div className="App">
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12"}>
                            { this.state.slide === 0 ? <Main nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 1 ? <Slide1 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 2 ? <Slide2 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 3 ? <Slide3 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 4 ? <Slide4 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 5 ? <Slide5 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 6 ? <Star nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 7 ? <Slide6 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 8 ? <Slide7 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 9 ? <Slide8 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 10 ? <Slide9 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 11 ? <Slide10 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 12 ? <Slide11 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 13 ? <Slide12 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 14 ? <Slide13 nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 15 ? <Pehar nextSlide={this.nextSlide}/> : null}
                            { this.state.slide === 16 ? <Video end={this.backToMain}/> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
