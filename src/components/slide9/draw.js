import React from "react";
import useMouse from "@react-hook/mouse-position";

function Draw() {
    const target = React.useRef(null);
    let drawPts = React.useRef([]);
    const mouse = useMouse(target, {
        fps: Infinity,
        enterDelay: 10,
        leaveDelay: 10
    });

    if (mouse.isDown) {
        // An array is a terrible data structure for this :P
        if (drawPts.current.length === 300) drawPts.current.shift();
        drawPts.current.push(mouse);
    }

    const drawing = [];

    for (let i = 0; i < drawPts.current.length; i++) {
        const { x, y } = drawPts.current[i];

        drawing.push(
            <div
                key={i}
                style={{
                    position: "absolute",
                    left: Math.min(x),
                    top: Math.min(y),
                    width: 12,
                    height: 12,
                    backgroundColor: "#e0e21b",
                    borderRadius: 1000
                }}
            />
        );
    }

    return (
            <div className={"cls2"} ref={target}>
                {drawing}
                <h1>{JSON.stringify(mouse.isDown, null, 2)}/</h1>
                <h1>x:{JSON.stringify(mouse.clientX, null, 2)}/</h1>
                <h1>y:{JSON.stringify(mouse.clientY, null, 2)}</h1>
            </div>
    );
}


export default Draw;