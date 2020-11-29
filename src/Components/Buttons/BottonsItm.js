import React from 'react';
import "./Buttons.css";

export default function ButtonsItm({button, buttonClick}) {
    if(button === "0") {
        return(
            <div className="button zero" onClick={() => buttonClick(button)}>
                {button}
            </div>
        )
    } else if(button === "÷" || button === "m+" || button === "×"
                || button === "-" || button === "+" || button === "=") {
        return(
            <div className="button orangeColor" onClick={() => buttonClick(button)}>
                {button}
            </div>
        )
    } else if(button === "AC" || button === "±" || button === "%") {
        return(
            <div className="button grayColor" onClick={() => buttonClick(button)}>
                {button}
            </div>
        )
    } else {
        return(
            <div className="button" onClick={() => buttonClick(button)}>
                {button}
            </div>
        )
    }
}