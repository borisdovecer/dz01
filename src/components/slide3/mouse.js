import * as React from 'react'
import useMouse from '@react-hook/mouse-position'

const Mouse = () => {


    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    });

    return (
        // You must provide the ref to the element you're tracking the
        // mouse position of
        <div style={board} ref={ref}>
            <h1>{JSON.stringify(mouse.isDown, null, 2)}</h1>
            <h1>{JSON.stringify(mouse.clientX, null, 2)}</h1>
            <h1>{JSON.stringify(mouse.clientY, null, 2)}</h1>
        </div>
    )
};

const board = {
    margin:"auto",
  width: "700px",
  height: "600px"
};

export default Mouse;