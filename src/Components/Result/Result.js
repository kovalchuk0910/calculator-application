import React from 'react';
import "../Buttons/Buttons.css"

export default function Result(props) {
    return(
        <div className="ResultScreen">
            {props.result}
        </div>
    )
}