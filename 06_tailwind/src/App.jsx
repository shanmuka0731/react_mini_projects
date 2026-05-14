import React from 'react'
import Section from './components/Section1/Section'
import Page1content from './components/Section1/Page1content'

const App = () => {
  const users=[
      {
        index:1,
        img:'https://images.unsplash.com/photo-1582198374945-39ac47df59b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'Customers valuing premium quality, brand reputation, and long-term benefits over price when purchasing products.',
        tag:'Underbanked',
        color:'orange'
      },
      {
        index:2,
        img:'https://plus.unsplash.com/premium_photo-1757582183427-0b2a767b570b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVuJTIwd29ya2luZyUyMHdpdGglMjBsYXB0b3BzfGVufDB8fDB8fHww',
        intro:'Budget-focused professionals affordable,comparing options carefully before making purchasing decisions online.',
        tag:'Budget-Focused',
        color:'blue'
      },
      {
         
        index:3,
        img:'https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'Busy individuals prioritizing speed, simplicity,seamless experiences when choosing products or services online.',
        tag:'Underserved',
        color:'green'
      },
      {
        index:4,
        img:'https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'Busy individuals prioritizing speed, simplicity,seamless experiences when choosing products or services online.',
        tag:'Underserved',
        color:'purple'
      }      
    ]

  return (    
    <div className='h-screen w-full'>
        <Section users={users}/>
       
    </div>
  )
}

export default App