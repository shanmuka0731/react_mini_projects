import React from 'react'
import { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState('')

  const onSubmitHandler=(elem)=>{
    elem.preventDefault()
    console.log("hi guys this is",title,"form")
    setTitle("")
  }
  // flow is title=" "-> value=" " -> onChange ="s" -> setTitle ="s" -> title="s". again repeat.
  return (
    <div>
      <form onSubmit={(elem)=>{
        onSubmitHandler(elem)
      }}>
        <input value={title} onChange={(elem)=>{
          setTitle(elem.target.value)
        }}
         type="text" placeholder="Enter your name"/>
        <button>Submit</button>
 
      </form>
    </div>
  )
}

export default App