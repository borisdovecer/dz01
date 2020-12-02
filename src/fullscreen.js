import React from 'react'
import App from './App'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Fullscreen() {
    const handle = useFullScreenHandle();
    return (
        <div>
        <button onClick={handle.enter}>
            Enter fullscreen
        </button>
            <FullScreen  handle={handle}>
                <App />
            </FullScreen>
        </div>
    )

}

export default Fullscreen