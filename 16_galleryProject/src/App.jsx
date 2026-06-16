import { useEffect } from 'react'
import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [userdata, setUserdata] = useState([])
  const [index,setIndex] = useState(1)

  const getdata=async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserdata(response.data)
  }

  useEffect(()=>{getdata()},[index])
  
  let printdata=<h3 className = " text-2xl text-amber-500 absolute top-1/2 left-1/2 -translate-x-1.5 -translate-y-1.5 ">Loading...</h3>
  if(userdata.length>0){
    printdata= userdata.map((elem,idx)=>{
      return(
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-50 w-64 m-4 bg-white rounded-xl overflow-hidden">
            <img className="h-full w-full object-cover"src={elem.download_url} alt={elem.id} />
            </div>
            <h3 className="text-white ml-6">{elem.author}</h3>
          </a>
        </div>
        
      )
    })
  }

  return (
    <div className='h-screen overflow-auto  bg-black text-white p-7'> 
        <div className="flex flex-wrap h-[82%]">{printdata}</div>
        
        <div className="flex justify-center items-center gap-6 p-4">
          <button
          onClick={()=>{
            if(index>1){
            setIndex(index-1)
            setUserdata([])
            }             

          }}
          className="bg-amber-400 text-black text-sm px-4 py-2 font-semibold" >Prev</button>
          <h4>Page {index}</h4>
          <button 
          onClick={()=>{
            setUserdata([])
            setIndex(index+1)
          }}
          className="bg-amber-400 text-black text-sm px-4 py-2 font-semibold">Next</button>
        </div>
    </div>
  )
}

export default App