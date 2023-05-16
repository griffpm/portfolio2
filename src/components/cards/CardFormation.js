import React from 'react'

export default function CardFormation({nom, year, place}) {
  return (
    <div className='bg-[#c3c3c3] border-[2px] border-solid border-[var(--color-g)] mx-2 my-4 p-2  '>
        <div className='text-[var(--color-g)] text-[1rem]'>
            <p className='text-[1.5rem]'>{nom}</p>
            <p>{year}</p>
            <p>{place}</p>
        </div>
    </div>
  )
}
