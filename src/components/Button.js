import React from "react";
import "../styles/Button.css"

function Button(props) {
    return (
        <button type="button" className={"btn w-100 h-100 text-white fw-bold display-1 py-2 " + (props.isNumeric ? "btn-primary" : "btn-warning")}>{props.text}</button>
    );
}

export default Button;