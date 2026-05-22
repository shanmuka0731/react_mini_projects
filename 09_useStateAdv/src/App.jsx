import React,{useState}from 'react'

const App = () => {
  // const [user, setUser] = useState({users:'shan',age:20})
  // function updateUser(){
  //   const newUser={...user}
  //   console.log(newUser)
  //   newUser.users="priyahhhh"
  //   newUser.age=25
  //   setUser(newUser)
  //   console.log(newUser)
  // }
  // return (
  //   <div>
  //     <h1>Name:{user.users}</h1>
  //     <p>Age: {user.age}</p>
  //     <button onClick={updateUser}>Update User</button>
  //   </div>
  // )
  
  // understanding prev function(it takes the snapshot of the previous state and then update the state)
  const [num,setNum]=useState(10)

  function updateNum(){
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }

  return(
    <div>
      <h1>{num}</h1>
      <button onClick={updateNum}>Update Number</button>
    </div>
  )
}

export default App