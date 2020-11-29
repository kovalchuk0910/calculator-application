import React, { useState } from 'react';
import './Buttons.css';
import ButtonsItm from './BottonsItm';
import Result from '../Result/Result';

export default function Buttons() {
    let [result, setResult] = useState("0");
    let [prevResult, setPrevResult] = useState(null);
    let [operator, setOperator] = useState(null);

    function buttonClick(button) {
        const current = parseFloat(result);

        //Серые кнопки
        if(button === "AC") {
            return (
                setResult("0"),
                setPrevResult(null),
                setOperator(null),
                localStorage.removeItem("sqrt")
            )
        }
        if(button === "±") {
            return setResult((current * -1).toString());
        }
        if(button === "%") {
            return setResult((current / 100).toString());
        }

        //Оранжевые кнопки
        if(button === "÷") {
            if(!prevResult) {
                return (
                    setResult("0"),
                    setPrevResult(parseFloat(result)),
                    setOperator("÷")
                )  
            } else {
                if(operator === "÷") {
                    setPrevResult(parseFloat(prevResult) / parseFloat(result));
                }
                if(operator === "×") {
                    setPrevResult(parseFloat(prevResult) * parseFloat(result));
                }
                if(operator === "-") {
                    setPrevResult(parseFloat(prevResult) - parseFloat(result));
                }
                if(operator === "+") {
                    setPrevResult(parseFloat(prevResult) + parseFloat(result));
                }
                setResult("0");
                setOperator("÷");
                return;
            }
        }
        if(button === "×") {
            localStorage.setItem("sqrt", result * result);

            if(!prevResult) {
                return (
                    setResult("0"),
                    setPrevResult(parseFloat(result)),
                    setOperator("×")
                )  
            } else {
                if(operator === "×") {
                    setPrevResult(parseFloat(prevResult) * parseFloat(result));
                }
                if(operator === "-") {
                    setPrevResult(parseFloat(prevResult) - parseFloat(result));
                }
                if(operator === "+") {
                    setPrevResult(parseFloat(prevResult) + parseFloat(result));
                }
                if(operator === "÷") {
                    setPrevResult(parseFloat(prevResult) / parseFloat(result));
                }
                setResult("0");
                setOperator("×");
                return;
            }
        }
        if(button === "-") {
            if(!prevResult) {
                return (
                    setResult("0"),
                    setPrevResult(parseFloat(result)),
                    setOperator("-")
                )  
            } else {
                if(operator === "-") {
                    setPrevResult(parseFloat(prevResult) - parseFloat(result));
                }
                if(operator === "+") {
                    setPrevResult(parseFloat(prevResult) + parseFloat(result));
                }
                if(operator === "×") {
                    setPrevResult(parseFloat(prevResult) * parseFloat(result));
                }
                if(operator === "÷") {
                    setPrevResult(parseFloat(prevResult) / parseFloat(result));
                }
                setResult("0");
                setOperator("-");
                return;

            }
        }
        if(button === "+") {
            if(!prevResult) {
                return (
                    setResult("0"),
                    setPrevResult(parseFloat(result)),
                    setOperator("+")
                )  
            } else {
                if(operator === "+") {
                    setPrevResult(parseFloat(result) + parseFloat(prevResult));
                }
                if(operator === "-") {
                    setPrevResult(parseFloat(prevResult) - parseFloat(result));
                }
                if(operator === "×") {
                    setPrevResult(parseFloat(prevResult) * parseFloat(result));
                }
                if(operator === "÷") {
                    setPrevResult(parseFloat(prevResult) / parseFloat(result));
                }
                setResult("0");
                setOperator("+");
                return;

            }
        }

        //Кнопка =
        if(button === "=") {
            setPrevResult(null);
            let sqrt = localStorage.getItem("sqrt");
            
            if(sqrt !== null && result === "0") {
                return setResult(parseFloat(sqrt));
            } else {
                localStorage.removeItem("sqrt");
                if(operator === "÷") {
                    return setResult((prevResult / parseFloat(result)));
                 }
                 if(operator === "×") {
                     return setResult((prevResult * parseFloat(result)));
                 }
                 if(operator === "-") {
                     return setResult((prevResult - parseFloat(result)));
                 }
                 if(operator === "+") {
                     return setResult((prevResult + parseFloat(result)));
                 }
            }
        }

        //Кнопки памяти
        if(button === "m+") {
            setResult("0");
            let memoryStorage = JSON.parse(localStorage.getItem("Memory"));
            if(memoryStorage === null) {
                localStorage.setItem("Memory", JSON.parse(result));
            } else {
                localStorage.setItem("Memory", memoryStorage + parseFloat(result));
            }
            return;
        }
        if(button === "m-") {
            setResult("0");
            let memoryStorage = JSON.parse(localStorage.getItem("Memory"));
            if(memoryStorage === null) {
                localStorage.setItem("Memory", 0 - JSON.parse(result));
            } else {
                localStorage.setItem("Memory", memoryStorage - parseFloat(result));
            }
            return;
        }

        if(button === "mr") {
            if(localStorage.getItem("Memory") === null) {
                return;
            } else {
                return setResult(localStorage.getItem("Memory"));
            }
        }

        if(button === "mc") {
            localStorage.removeItem("Memory");
        }

        //Кнопка точки
        if(button === ",") {
            if(result.includes(".")) {
                return;
            } else {
                return setResult(result + '.');
            }
        }

        if(result[result.length - 1] === ".") { // Если есть точка, то добавляем после точки числа
            setResult(result + button);         
        } else{
            setResult((parseFloat(current + button)).toString());
        }
    }

    return(
        <div className="Buttons">
            <div c lassName="Result">
                <Result result={result}/>
            </div>

            <div className="buttons">
                <ButtonsItm button="AC" buttonClick={buttonClick}/>
                <ButtonsItm button="±" buttonClick={buttonClick}/>
                <ButtonsItm button="%" buttonClick={buttonClick}/>
                <ButtonsItm button="÷" buttonClick={buttonClick}/>

                <ButtonsItm button="mc" buttonClick={buttonClick}/>
                <ButtonsItm button="mr" buttonClick={buttonClick}/>
                <ButtonsItm button="m-" buttonClick={buttonClick}/>
                <ButtonsItm button="m+" buttonClick={buttonClick}/>

                <ButtonsItm button="7" buttonClick={buttonClick}/>
                <ButtonsItm button="8" buttonClick={buttonClick}/>
                <ButtonsItm button="9" buttonClick={buttonClick}/>
                <ButtonsItm button="×" buttonClick={buttonClick}/>

                <ButtonsItm button="4" buttonClick={buttonClick}/>
                <ButtonsItm button="5" buttonClick={buttonClick}/>
                <ButtonsItm button="6" buttonClick={buttonClick}/>
                <ButtonsItm button="-" buttonClick={buttonClick}/>

                <ButtonsItm button="1" buttonClick={buttonClick}/>
                <ButtonsItm button="2" buttonClick={buttonClick}/>
                <ButtonsItm button="3" buttonClick={buttonClick}/>
                <ButtonsItm button="+" buttonClick={buttonClick}/>

                <ButtonsItm button="0" buttonClick={buttonClick}/>
                <ButtonsItm button="," buttonClick={buttonClick}/>
                <ButtonsItm button="=" buttonClick={buttonClick}/>
            </div>
        </div>
        
    )
}
