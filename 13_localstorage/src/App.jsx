import React from 'react'

const App = () => {
      {/*   Methods in LOCAL STORAGE
        
        //used to set items permanently in local storage(in that particular url)
      localStorage.setItem('user','shannuh')
      localStorage.setItem('user','priyaaa')
      localStorage.setItem('user','bob')

      const username=localStorage.getItem('user')
      console.log(username); //single ga items set chesthey last item ey local storage lo untadhi only adhey get avthadhi (op: bob)
      
      localStorage.removeItem('user','bob')        
     */}
      
    // setting an obj in local storage
    const user={
      username:"shanmuka",
      age:19,
      address:"vizag"
    }
    
    // for setting an obj in the local storage
    localStorage.setItem('user',JSON.stringify(user))
    
    //for displaying the item in the string format  
    const op= localStorage.getItem('user')
    console.log(op);
    
    //for displaying the item in object format(nrml form).
    const op1= JSON.parse(localStorage.getItem('user'))
    console.log(op1);
    
    return (
    <div>App</div>
  )
}

export default App