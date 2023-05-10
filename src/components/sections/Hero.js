// import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
  return (
    <div id='hero'>
        <div id='hero_content'>
            <div id='hero_text'>
                <div>
                    <h1>Hello,<br/> I am <span>Paul</span>, <br/>baby developer.</h1>
                    <p>Actualy living in France (and probably always will).</p>
                    <button>Give me work!</button>
                    
                </div>
                <div id='hero_text_img'>
                    <img src="/img/paul.jpg" alt="" />
                </div>
            </div>
        </div>

        <div id='hero_bg_img'>
            <img src="/img/bg1.jpg" alt="space and stars" />
        </div>

        <div id="arrow">
            <MdKeyboardDoubleArrowDown size="100px" />
        </div>

        

    </div>
  )
}
