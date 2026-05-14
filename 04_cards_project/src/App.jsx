import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
    name: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
    name: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2747494711/31b6ad5c-b404-4086-a685-89b1d5294f1c-cover.png",
    name: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logowik.com/content/uploads/images/adobe-inc-a878.logowik.com.webp",
    name: "Adobe",
    datePosted: "4 weeks ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNmqH8XpA4VJzSQaNCtNEKDCV1NMH0Zh3lA&s",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GyyMW1Lu5C3wtrNBOFIXxyGyElzZxDpnMA&s",
    name: "Uber",
    datePosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.sanity.io/images/rn4tswnp/production/701c93f19c501de365d167e88aae6d09802cb629-1675x1103.jpg?h=320&auto=format&dpr=2",
    name: "Airbnb",
    datePosted: "9 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  }
];    
  return (
    <div className='parent'>
      {
        jobOpenings.map(function(elem){
        return <Card logo={elem.brandLogo} company={elem.name} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}
        />
      })}
        
    </div>
  )
}

export default App
