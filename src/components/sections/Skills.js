import React from 'react'
import CardEngagement from '../cards/CardEngagement'
import { MdAccountBalanceWallet, GiTalk, BsFillGearFill } from 'react-icons/md'


export default function Skills() {
    return (
    <div id='skills'>
        <div id='skills_content'>
            <div id='skill_text'>
                <h2><span>Compétences</span> et Outils:</h2>
                <p>Pour plus de <span id='n1'>details</span> vous pouvez jetter un coup d'oeil dans la rubrique Projets </p>
            </div>
            <div id='skill_img'>
                <img src="/img/skill.png" alt="" />
            </div>
        </div>
        <div id='skill_content2'>
            <div id='skill2_img'>
                <img src="/img/pc.png" alt="" />
            </div>
            <div id='skill_cards'>
                <CardEngagement img="/img/wallet.png" title1="Prix  " title2="Resonable et flexible pour touts les clients" text="Chaque projet est facturé differament."/>
                <CardEngagement img="img/headset.png" title1="Communication " title2="Partage d'idées" text="Pour un projet réussi, la communcation client/developeur est importante."/>
                <CardEngagement img="img/gear.png" title1="Une Infinité " title2="de Designs et Services" text="Il faut savoir se démarquer pour réussir."/>
            </div>
        </div>

    </div>
    )
}
