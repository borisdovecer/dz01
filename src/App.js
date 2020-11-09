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


import './App.css';

class App extends React.Component {
    state = {
        slide: 0
    };

    nextSlide = nextSlide => {
        this.setState({slide: nextSlide})
    };

    render() {
        return (
            <div className="App">
                <React.Fragment>
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
                </React.Fragment>
            </div>
        );
    }
}

export default App;
