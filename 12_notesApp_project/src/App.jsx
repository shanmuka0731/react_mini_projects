import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  
  const submitHandler = (elem) => {
    elem.preventDefault()
     
    const copytask=[...task];
    copytask.push({title,details,clicked:false})
    setTask(copytask)
    setTitle('')
    setDetails('')
  }


  return (
    <div className="h-screen lg:flex bg-black text-white ">
      
      <form
        onSubmit={(elem)=>{
          submitHandler(elem)
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start "
      >
        <h1 className='text-3xl font-bold '>Add Notes</h1>
      
      <input
          className="w-full font-medium px-5 py-2 border-2 outline-none rounded"
          type="text"
          placeholder="Enter the Task"
          value={title}
          onChange={(elem)=>{
            setTitle(elem.target.value)
          }}
      />

      <textarea
          type="text"
          className="w-full font-medium px-5 h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          placeholder="Enter the Description"
          value={details}
          onChange={(elem)=>{
            setDetails(elem.target.value)
          }}
      
      />
      <button className="bg-white font-medium w-full outline-none hover:bg-gray-200 text-black py-2 px-5 rounded ">New Note</button>
    </form>  

    <div className="lg:w-1/2 lg:border-l-2 p-10 bg-black">
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div id="right" className="flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto">           
      

      {task.map(function(elem,idx){
        return <div key={idx}
                    className={`h-60 w-60 rounded-2xl p-12 text-black font-medium ${elem.clicked ? "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFDHrTKz5MoCJZndf7DF_LuSPKeANSdRi0w&s')] bg-contain bg-no-repeat bg-center text-white" :  "bg-[url('https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-cream-sticky-notes-paper-illustration-with-clip-white-transparent-background-png-image_6484210.png')]  bg-cover bg-no-repeat bg-center text-black" }`}
                    onClick={()=>{
                    const copytask=[...task]
                    copytask[idx].clicked = !copytask[idx].clicked
                    setTask(copytask)
                  }}>
                <h3 className='leading-tight text-xl font-bold'>
                {elem.title}
                </h3>
                <p className="mt-3 leading-tight font-medium">
                  {elem.details}
                </p>
              </div>
      })}  
      

      </div>
    </div>
    </div>
        

    
  )
}

export default App