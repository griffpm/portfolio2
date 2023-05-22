import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiTwitter } from "react-icons/fi";
export default function Contact() {
  return (
    <div id='contact'>
        <div id='contact_content'>
            <div id='cc-text'>
                <h2>Contactez moi !</h2>
                <p>Soit par <span>email </span> ou par <br/> mes <span>réseaux.</span></p>
                <img src="" alt="" />
            </div>
            <div id='cc-rs'>
                {/*liens vers réseaux sociaux */}
            <a href=""><FiTwitter size={32} className='my-4'/></a>
            <a target='_blank' href="https://www.linkedin.com/in/paul-menard-202251169/"><AiFillLinkedin size={32} className='my-4'/> </a>
            <a href=""><AiFillGithub size={32} className='my-4'/></a>
            </div>
            <div id='cc-form'>
                {/* formulaire de contact */}
                <form className='max-w-[420px]'>
                    <div className='flex flex-wrap justify-between mb-[2rem]'>
                        <div>
                            <div className='my-2'>
                                <label>Nom</label>
                            </div>
                            <div className='my-2'>
                                <input type="text" className='h-[40px] text-white bg-[#35353c] border-[1px] border-solid border-[#a7a3a3]' />
                            </div>
                        </div>
                        <div>
                            <div className='my-2'>
                                <label htmlFor="">Email</label>
                            </div>
                            <div className='my-2'>
                                <input type="email" className='h-[40px] text-white bg-[#35353c] border-[1px] border-solid border-[#a7a3a3]' />
                            </div>
                        </div>
                    </div>
                    <div className='my-[3rem]'>
                        <div className='my-2'>
                            <label htmlFor="">Message</label>
                        </div>
                        <div>
                            <textarea name="message" id="message" className='w-[100%] min-h-[100px] text-white bg-[#35353c] border-[1px] border-solid border-[#a7a3a3]'></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-white text-[1rem] border-green-400 border-solid border-[2px] py-2 px-2 '>Envoyez!</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
