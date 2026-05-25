import React from 'react'

const App = () => {
  
  const onSubmitHandler=(elem)=>{
    elem.preventDefault() // used to prevent the default behaviour of the form which is to refresh the page
    console.log("HI FRIENDS")

  }


  return(
    <div >
      <form className="hello" onSubmit={
      (elem)=>{
      onSubmitHandler(elem)
    }
      }>
      <input className="hello2" type="text" placeholder="Enter the Input"/>
      <button>Submit</button>
      </form>
    </div>
    )
}

export default App