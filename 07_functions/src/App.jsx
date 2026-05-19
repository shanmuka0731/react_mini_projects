import React from 'react'

const App = () => {
  function btnclicked(){
    console.log("hi guys");
    
  }

  function onChanging(val){
    console.log(val);
  }
  return (
    <div>
      
      {/* calling the function written above */}
      <button onClick={btnclicked} className='btn'>Click here</button> 

      {/* event handler containing the function here itself without calling*/}
      <input onChange={function(){
        console.log("User is typing");  
      }}type="text" placeholder="Enter Name"/>

    {/* printing the input value being entered, in the console. and elem is the parameter */}
      <input onChange={function(elem){
        console.log(elem.target.value);
        
      }}
      type='text' placeholder='Enter smthg'/>

    <input onChange={function(elem){
       console.log(elem.target.value);

    }} type='text' placeholder='Enter the input'/>
    
    <input onWheel={function(elem){      
      console.log(elem.deltaY);
    }}
    type='text' placeholder='Enter ra pillalu'/>
    </div>
  )
}

export default App

