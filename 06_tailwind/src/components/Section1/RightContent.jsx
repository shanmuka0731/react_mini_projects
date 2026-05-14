import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap rounded-4xl overflow-x-auto gap-9 p-6 w-2/3'>
    {
      props.users.map(function(elem){{
        return <RightCard index={elem.index} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color}/>
      }})
    }

    </div>
  )
}

export default RightContent