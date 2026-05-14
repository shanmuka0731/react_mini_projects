import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Page1content = (props) => {
  return (
    <div className='px-10 pt-6 pb-20 flex items-center gap-3 h-[90vh] '>
     <LeftContent/>
     <RightContent users={props.users}/>

    </div>
  )
}

export default Page1content