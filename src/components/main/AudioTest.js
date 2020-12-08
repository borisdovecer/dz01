import React from 'react'

const AudioTest = (props) => {
    return (
        <audio autoPlay
               src={"./audio/" + props.audio}
        />
    )
}
export default AudioTest