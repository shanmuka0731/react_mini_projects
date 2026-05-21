import React from 'react'
import { ArrowRight } from 'lucide-react';
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-75 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="User" />
        <RightCardContent index={props.index} intro={props.intro} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard