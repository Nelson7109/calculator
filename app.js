
import React, { useState } from "react";

import './app.css'
let num="";
function App(){
    const[input,setInput]=useState("")
   
    function add(val){
        num+=val
        console.log(num)
      setInput(num)
    }
    function output(){
       let out=eval(num)
       setInput(out)
      
    }
    function clear(){
        setInput(" ")
        num=" "
    }
    return(
<div className='app'>
   <div className='box'>
    <div className="input">
   <input value={input}/>
   </div>
   <div className='button-box'>
   <div className='button'>
   <button onClick={()=>add("(")}>(</button>
   <button onClick={()=>add(")")}>)</button>
   <button onClick={clear}>C</button>
   <button onClick={()=>add("//")}>//</button><br></br>
   <button onClick={()=>add("7")}>7</button>
   <button onClick={()=>add("8")}>8</button>
   <button onClick={()=>add("9")}>9</button>
   <button onClick={()=>add("/")}>÷</button><br></br>
   <button onClick={()=>add("4")}>4</button>
   <button onClick={()=>add("5")}>5</button>
   <button onClick={()=>add("6")}>6</button>
   <button onClick={()=>add("*")}>x</button><br></br>
   <button onClick={()=>add("1")}>1</button>
   <button onClick={()=>add("2")}>2</button>
   <button onClick={()=>add("3")}>3</button>
   <button onClick={()=>add("-")}>-</button><br></br>
   <button onClick={()=>add("0")}>0</button>
   <button onClick={()=>add(".")}>.</button>
   <button onClick={output}>=</button>
   <button onClick={()=>add("+")}>+</button><br></br>
   </div>
</div>
   </div>
</div>
    );
}

export default App;