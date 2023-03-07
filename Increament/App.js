import React, { useState } from 'react'
import './incre.css'

const App = () => {

    const [num,setNum] = useState(0);

    const Increament = () =>{
        setNum(num+1);
    }

    const decreament = () =>{
        if (num>0){
        setNum(num-1);
        }else{
            setNum(0);
        }
    }
  return (
    <div className='main'> 
    <div className='center'>
    <h1>{num}</h1>

    <div className='button_div'>

    <button onClick={Increament}>Increament</button>
    <button onClick={decreament}>decreament</button>

    </div>
    </div>

    </div>
  )
}

export default App