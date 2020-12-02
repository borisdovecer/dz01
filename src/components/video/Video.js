import React from 'react'

class Video extends React.Component{

    render() {
        return(
            <div className="main">
                <video
                    src="./a-s.mp4"
                    autoPlay
                    loop
                    style={{width:"100%", height:"700px"}}
                />
                <button className="main-button" onClick={this.props.nextSlide} >Start</button>
            </div>
        )
    }
}

export default Video
