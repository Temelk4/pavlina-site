import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import GustelaImg from "../../../images/gustela-dances.webp"
import GustelaCastle from "../../../images/gustella-castle.webp"

const Gustela = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>Gustella Dances</h1>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper-redux">
                            <img id="thumbnail" src={GustelaCastle} />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-thumbnail-div">
                            <img id="thumbnail" src={GustelaImg} />
                        </div>
                        <div className="film-about-div">
                            <p className="film-about">
                                A snowed 15th-century castle where only the spirits of knights dead long ago reign. Them, and TWO MAGICAL CREATURES made of ice and snow, a gift of planet Earth to all living creatures. They are LUMIUKKO AND GUSTELLA.
                                <br/>
                                <br/>
                                Lumiukko is shaped as an old man, but in fact, he is a boy trapped in a snowy suit for 500 years. He is all sculptured ice, with a few icicles that adorn his right shoulder.
                                <br/>
                                <br/>
                                GUSTELLA is the ageless wind, the travel companion who carries him from place to place. She is made of streaks of loosely joined snowflakes that can only be held together by transparent patches of ice that join them. Her hair is made of effervescent lumpy snowflakes and a halo adorns her head.
                                <br/>
                                <br/>
                                CUT TO EXT. LATE MORNING - CASTLE
                                <br/>
                                <br/>
                                Lumiukko sleeps in this wonderland dreaming of becoming a knight in his next life.
                                <br/>
                                <br/>
                                ANGLE ON - A sudden swirl of wind swoops up to him as GUSTELLA is trying to wake him.
                                <br/>
                                <br/>
                            </p>
                            <p className="film-about-2">
                                GUSTELLA
                                <br/>
                                Wake up! Wake up! I am so bored! Let us play!
                            </p>
                            <p className="film-about">
                                There is no reaction from Lumiukko. Gustella blows a little harder.
                                 <br/>
                            </p>
                            <p className="film-about-2">
                                GUSTELLA (CONT'D)
                                <br/>
                                Wake up, wake up, you heavy sack of potatoes.
                            </p>
                            <p className="film-about">
                                This gets a reaction from Lumi. He is startled awake.
                            </p>
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Gustela