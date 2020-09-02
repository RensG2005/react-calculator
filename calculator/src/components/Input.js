import React from 'react'

const Input = ({setResult, result, click, calculate}) => {


    function clearAll(){
        setResult([])    
    }

    function back(){
        setResult(result.slice(0, result.length - 1)) 
    }

    return(
    <div className="input-grid">
        <button onClick={clearAll} className="input-field big">Ce</button> 
        <button onClick={back} className="input-field big">C</button>
        <button value="1" onClick={click} className="input-field">1</button>
        <button value="2" onClick={click} className="input-field">2</button>
        <button value="3" onClick={click} className="input-field">3</button>
        <button value="+" onClick={click} className="input-field">+</button>
        <button value="4"  onClick={click} className="input-field">4</button>
        <button value="5" onClick={click} className="input-field">5</button>
        <button  value="6" onClick={click} className="input-field">6</button>
        <button  value="-"  onClick={click} className="input-field">-</button>
        <button  value="7" onClick={click} className="input-field">7</button>
        <button  value="8" onClick={click} className="input-field">8</button>
        <button  value="9" onClick={click} className="input-field">9</button>
        <button  value="*"  onClick={click} className="input-field">*</button>
        <button  value="."  onClick={click} className="input-field">.</button>
        <button value="0" onClick={click} className="input-field">0</button>
        <button onClick={calculate} className="input-field">=</button>
        <button onClick={click}  value="÷" className="input-field">÷</button>
    </div>
    )
}


export default Input