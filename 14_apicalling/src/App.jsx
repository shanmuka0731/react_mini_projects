 import React from 'react'
 import axios from 'axios'
 const App = () => {
  
 

  // //fetch api 
  // //you have to use await for not getting promise as a response.
  // const getdata= async ()=>{

  //   //the will have all the information
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
  //   console.log(response)
   

  //   //you will get output in the json format
  //   const data= await response.json()
  //   console.log(data);   
  // }

 
  

  //axios api
  const getdata=async()=>{

      const response= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      console.log(response.data);
      

  }


   return (
     <div>
      <button onClick={getdata}>
        Get DATA
      </button>
     </div>
   )
 }
 
 export default App