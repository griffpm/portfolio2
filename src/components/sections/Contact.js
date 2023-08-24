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
            <div id="coordonees">
                <h2> Mes Coordonnées </h2>
                  <p>Mon Email: menard@gmail.com </p>
                  <p>Mon téléphone: 0* ** ** ** ** </p>
            </div>
        </div>
    </div>
  )
}
