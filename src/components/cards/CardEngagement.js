import React from 'react'

export default function CardEngagement({img, title1, title2, text}) {
  return (
    <div id='cardEngagement'>
        <div className='py-4 px-4'>
            <img src={img} alt="" /> 
        </div>
        <div>
            <h3>{title1}{title2}</h3>
            <div id='ligne'></div>
            <p>{text}</p>
        </div>
    </div>
  )
}
