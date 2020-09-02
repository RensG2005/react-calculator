import React, { useState } from 'react';
import Result from './components/Result'
import Input from './components/Input'
import './App.css';

function App() {

 let [result, setResult] = useState('')


 function click(e){
  setResult([...result, e.target.value])
  console.log(result)

}

let calculate = () => {
  try{
    setResult(eval(result.join('')) + '')
  } catch{
    setResult('Syntax Error')
  }

};

  return (
    <div className="App">
      <Result result={result}/>
      <Input click={click} setResult ={setResult} result={result} calculate={calculate}/>
    </div>
  );
}

export default App;