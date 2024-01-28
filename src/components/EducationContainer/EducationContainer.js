import React from 'react';
import { Element } from 'react-scroll';
import Education from '../Education/Education';
import "./EducationContainer.css";
const EducationContainer = () => {
    const educations=[
        {
            img:"https://www.canr.msu.edu/contentAsset/image/6d081af8-8fa6-4927-bc64-c1ee0dca1b12/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80",
            title:"MCA -78%",
            desc:
            
           "Dr.Mahalingam College Of Engineering And Technology",
            
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWh0jZSk_B6FIQt3Pb9-A7nObGJ39ClsRWMg&usqp=CAU",
            title:"B.SC(MATHS WITH COMPUTER APPLICATION) -75%",
            desc:
            
           "Vellalar College For Women",
        },
        
        {
            img:"https://i.ytimg.com/vi/1E86evDdy6Q/maxresdefault.jpg",
            title:"HSC - 59%",
            desc:
            
           "Vidhya Vikas Matric Hr Sec School Uthangarai",

        },
        {
            img:"https://i.ytimg.com/vi/yuLZsQpm-Ys/maxresdefault.jpg",
            title:"SSLC -80%",
            desc:
            "Govt High School Hanumantheertham",
            link:"www.google.com",
        },
    ];
  return (
<Element className="educationcontainer" id="educations">
    <h1>Education</h1>
    <p>Here are my Education Details.</p>
    <div className='educationcontainer__educations'>
    {
    educations.map((education,index) => {
        return(
            <Education
             key={index} 
             img={education.img} 
             title={education.title} 
             desc={education.desc} 
             link={education.link} 
             />
        )
    })
}
    </div>
</Element>
  )
}

export default EducationContainer