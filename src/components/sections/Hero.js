// import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
    return (
    <div id='hero'>
        <div id='hero_content'>
            <div id='hero_text'>
                <div>
                    <h1>Bonjour,<br/> Je suis <span>Paul</span>, <br/> Un Developpeur Web Junior.</h1>
                    <p>Je vis actuellemnt en France, en Normandie pour être plus précis.</p>
                    <a href="#contact"><button>En savoir plus a propos de moi</button> </a>
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
