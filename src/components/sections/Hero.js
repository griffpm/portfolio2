// import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { DataFormations } from "../data/DataFormations";
import CardFormation from "../cards/CardFormation";
import CardEmploi from "../cards/CardEmploi";
import { DataEmployement } from "../data/DataEmployement";

export default function Hero() {
    if (typeof window !== 'undefined') {
    // je défini la div MyModalHero en tant que variable
    var modale = document.getElementById('myModalHero');
    // je défini le button myBtnHero en tant que variable
    var open = document.getElementById('myBtnHero');
    // je défini le button closeHero en tant que variable
    var close = document.getElementById('closeHero');

    // lorque je click sur button myBtnHero, la modale s'affiche
    open.onclick = function () {
        modale.style.display = "block";
    }
     // lorque je click sur button closeHero, la modale se ferme
    close.onclick = function () {
        modale.style.display = "none";
    }

}

    return (
    <div id='hero'>
        <div id='hero_content'>
            <div id='hero_text'>
                <div>
                    <h1>Bonjour,<br/> Je suis <span>Paul</span>, <br/> Developpeur Web.</h1>
                    <p>Je vis actuellement en France, en Normandie pour être plus précis.</p>
                    <button id="myBtnHero">En savoir plus a propos de moi</button>
                </div>
            </div>
        </div>
        <div id='hero_bg_img'>
            <img src="/img/bg1.jpg" alt="space and stars" />
        </div>
        <div id="arrow">
            <a href="#skills"><MdKeyboardDoubleArrowDown size="100px" /></a> 
        </div>
        <div id="myModalHero">{/* modale */}
            <div id="modalHero-content">{/* Modal content */}
                <button id="closeHero"><AiOutlineCloseCircle/></button>
                <div id='modaleHero_content_content'>
                    <h2>A propos de moi</h2>
                    <h3>Mes diplomes</h3>
                    <div>{/* liste des formation que j'ai effectuer */}
                        {
                            DataFormations.map((item)=>(
                                <CardFormation
                                    nom={item.nom}
                                    year={item.year}
                                    place={item.place}
                                    key={item.id}
                                />
                            ))
                        }
                    </div>
                    <h3 className="mt-12 mb-2">Mes partenariats</h3>{/* liste des entreprise avec lesquels j'ai deja travailler */}
                    <div>
                        {
                            DataEmployement.map((item)=>(
                                <CardEmploi 
                                entreprise={item.entreprise} 
                                urlEntreprise={item.urlEntreprise} 
                                date1={item.date1} 
                                date2={item.date2} 
                                post={item.post}
                                key={item.id}/>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
