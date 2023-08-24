// import React from 'react'
import { DataFormations } from "../data/DataFormations";
import CardFormation from "../cards/CardFormation";
import CardEmploi from "../cards/CardEmploi";
import { DataEmployement } from "../data/DataEmployement";

export default function Hero() {

    return (
    <div id='hero'>
        <div id='hero_content'>
            <div id='hero_text'>
                <div>
                    <h1>Bonjour,<br/> Je suis <span>Paul</span>, <br/> Developpeur Web.</h1>
                    <p>Je vis actuellement en France, en Normandie pour être plus précis.</p>
                    <p> Je vous invite à découvrir mes projets et prendre connaissance des mes compétences de développeur web.</p>
                    <p> Je vous souhaite une bonne visite. </p>
                </div>
            </div>
        </div>
        <div id='hero_bg_img'>
            <img src="/img/bg1.jpg" alt="space and stars" />
        </div>
            </div>
    )
}
