import React from 'react'
import CardEngagement from '../cards/CardEngagement'
import { MdAccountBalanceWallet, GiTalk, BsFillGearFill } from 'react-icons/md'


export default function Skills() {
    return (
    <div id='skills'>
        <div id='skills_content'>
            <div id='skill_text'>
                <h2><span>Skills</span> and tools</h2>
                <div id='liste'>
                    <ul id='l1'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>PHP</li>
                        
                    </ul>
                    <ul id='l2'>
                        <li>Symphony</li>
                        <li>React</li>
                        <li>NextJS</li>
                        <li>WordPress</li>
                    </ul>
                </div>
                
            </div>
            <div id='skill_img'>
                <img src="/img/programming.jpg" alt="" />
            </div>
        </div>

        <div id='skill_content2'>
            <div id='skill2_img'>
                <img src="/img/s1img.jpg" alt="" />
            </div>
            <div id='skill_cards'>
                <CardEngagement img="/img/wallet.png" title1="Reasonable and" title2="flexible prices for clients" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro velit consequatur."/>
                <CardEngagement img="img/headset.png" title1="Elaborating" title2="ideas in a discussion" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro velit consequatur."/>
                <CardEngagement img="img/gear.png" title1="Full range of" title2="design and motion services" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro velit consequatur."/>
            </div>
        </div>

    </div>
    )
}
