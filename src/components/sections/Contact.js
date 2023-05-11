import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiTwitter } from "react-icons/fi";
export default function Contact() {
  return (
    <div id='contact'>
        <div id='contact_content'>
            <div id='cc-text'>
                <h2>Let's get in touch!</h2>
                <p>Either by <span>email </span> or through <br/> my <span>social media.</span></p>
                <img src="" alt="" />
            </div>
            <div id='cc-rs'>
                {/*liens vers réseaux sociaux */}
            <a href=""><FiTwitter size={32} className='my-4'/></a>
            <a href=""><AiFillLinkedin size={32} className='my-4'/> </a>
            <a href=""><AiFillGithub size={32} className='my-4'/></a>
            </div>
            <div id='cc-form'>
                {/* formulaire de contact */}
                <form>
                    <div className='flex mb-[2rem] space-x-12'>
                        <div>
                            <div className='my-2'>
                                <label>Name</label>
                            </div>
                            <div className='my-2'>
                                <input type="text" className='h-[40px] text-black' />
                            </div>
                        </div>
                        <div>
                            <div className='my-2'>
                                <label htmlFor="">Email</label>
                            </div>
                            <div className='my-2'>
                                <input type="email" className='h-[40px] text-black' />
                            </div>
                        </div>
                    </div>
                    <div className='my-[3rem]'>
                        <div className='my-2'>
                            <label htmlFor="">Message</label>
                        </div>
                        <div>
                            <textarea name="message" id="message" className='w-[100%] min-h-[100px] text-black'></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-white text-[1rem] border-green-400 border-solid border-[2px] py-2 px-2 '>Message me!</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
