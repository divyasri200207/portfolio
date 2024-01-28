import React, { useState } from 'react'
import"./Education.css";

const Education = ({img,title,desc,link}) => {
    const[show, setShow]=useState(false);
  return (
    <a href={link}>
    <div 
    className="education"
    onMouseEnter={()=>setShow(true)} 
    onMouseLeave={()=>setShow(false)}
    > 
    {show ? (
            <div className='education__content'> 
                <h4>{title}</h4>
                <p>{desc}</p>
                </div>
        ):(
            <img src={img} alt="" />
        ) }

    </div>
    </a>
  );
};

export default Education