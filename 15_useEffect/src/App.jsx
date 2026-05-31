import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
   
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  
  useEffect(() => {
    console.log("Hi Guys UseEffect is working");
    
  }, [num]) //runs when num obj changes 
  
  return (
    <div>
      <h1>num is {num}</h1>
      <h2>num2 is {num2}</h2>
      <button onMouseEnter={()=>{setNum(num+1)}} onMouseLeave={()=>{setNum2(num2+1)}}>Click</button>
    </div>
  )
}

export default App