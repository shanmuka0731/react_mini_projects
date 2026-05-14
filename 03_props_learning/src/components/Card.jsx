import React from 'react'

const Card = (props) => {
    //console.log(props);
  return (
    <div>
        <div className="card">
        <img  src="./public/images.jpg" alt="profile"/>
        <h1>{props.user} Card </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button >View Profile</button>
    </div>
    </div>
    
  )
  
}

export default Card