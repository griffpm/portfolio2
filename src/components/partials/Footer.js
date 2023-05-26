import React from 'react'
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-black text-white text-[1rem] flex flex-wrap justify-center py-4 space-x-4'>
    <p>Site fait avec des maux de tête 🤕.</p>
    <p className='flex'>CopyRight 2023 <span className='ml-2'><FaCopyright size={26}/></span>  </p>
    </footer>
  )
}
