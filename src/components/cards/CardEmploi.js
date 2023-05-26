import React from 'react'

export default function CardEmploi({entreprise, urlEntreprise, date1, date2, post}) {
  return (
    <div className='bg-[#c3c3c3] w-[500px] border-[2px] border-solid border-[var(--color-g)] mx-2 mt-4 p-2 text-[1rem] text-[var(--color-g)]'>
        <p className=" text-[1.5rem]">{entreprise}</p> 
        <a href={urlEntreprise}>Visiter le Site de l'entreprise</a> 
        <p>Du {date1} au {date2}</p> 
        <p>{post}</p> 
    </div>
  )
}
