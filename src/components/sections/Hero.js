// import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
    return (
    <div id='hero'>
        <div id='hero_content'>
            <div id='hero_text'>
                <div>
                    <h1>Hello,<br/> I am <span>Paul</span>, <br/> a baby developer.</h1>
                    <p>Actualy living in France (and probably always will). I love to laze around.</p>
                    <a href="#contact"><button>Give me work!</button> </a>
                </div>
            </div>
        </div>
        <div id='hero_bg_img'>
            <img src="/img/bg1.jpg" alt="space and stars" />
        </div>
        <div id="arrow">
            <a href="#skills"><MdKeyboardDoubleArrowDown size="100px" /></a> 
        </div>
    </div>
    )
}
