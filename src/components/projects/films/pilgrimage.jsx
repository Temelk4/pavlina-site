import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import PilgrimageImg from "../../../images/My-American_Pilgrimage.webp"
import GustelaCastle from "../../../images/gustella-castle.webp"

const Pilgrimage = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>The Promise of Pilgrimage</h1>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                             <Youtube 
                                mobile={mobile} 
                                id={"aHsLfMjUwSg"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-thumbnail-div">
                            <img id="thumbnail" src={PilgrimageImg} />
                        </div>
                        <div className="film-about-div">
                            <p className="film-about">
                                This narrative documentary chronicles the Americanization of Stoyan Christowe, a distinguished journalist, author, and a two-term Vermont state senator. An authentic American hero, Christowe's immigrant experience is not unlike many others, his achievements are. A century after his birth, his views, values and experiences offer native-born Americans and immigrants alike, inspiration and direction.
                                <br/>
                                <br/>
                                The life of Stoyan Christowe is a quintessentially American story. Born in Ottoman Macedonia in 1898, he immigrated to the US in 1911, at the age of 13, and sought to meld his Macedonian roots with his American life. His was the journey of a determined boy who dreamed of something beyond his understanding, but not beyond his reach. This peasant boy from Macedonia became a renowned American writer and a statesman who was an introspective and relentless seeker for his own truth - his own identity.
                                <br/>
                                <br/>
                            </p>
                            <p className="film-quote">
                                ❝ In my life I had two mothers: Macedonia who gave me birth,and America who adopted me. ❞ 
                                <br/>
                                <br/>
                                - Stoyan Christowe, 1924
                            </p>
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Pilgrimage