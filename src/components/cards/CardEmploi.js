import React from 'react'

export default function CardEmploi({entreprise, urlEntreprise, date1, date2, post}) {
  return (
    <div className='bg-[#c3c3c3] border-[2px] border-solid border-[var(--color-g)] mx-2 my-4 p-2 text-[1rem] text-[var(--color-g)]'>
        <p className=" text-[1.5rem]">{entreprise}</p> 
        <a href={urlEntreprise}>Site</a> 
        <p>{date1}</p> 
        <p>{date2}</p> 
        <p>{post}</p> 
    </div>
  )
}
