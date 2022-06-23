import React from "react";
import '../styles/Screen.css'

function Screen(props) {
    return (
        <div className="screen col-12 bg-black text-end text-white display-1 fw-bold p-2 rounded">
            {props.value}
        </div>
    )
}

export default Screen;