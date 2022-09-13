import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import ColorsImg from "../../../images/colors-macedonia.webp"
import Koce from "../../../images/new_koce.png"

const Macedonia = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>Colors of Macedonia</h1>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Written, Directed and Produced by</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Peter Murphy</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Executive Producers</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Macedonian Arts Council</h1>
                                <h1>Mike Zafirovski</h1>
                                <h1>George Atanasoski</h1>
                                <h1>Edited at KOCE-TV</h1>
                                <h1>Camera - Peter Murphy</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Macedonian Production Crew</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Stalin Lozanovski, Violeta Shindil, Marija Kostovska</h1>
                            </div>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                            <Youtube 
                                mobile={mobile} 
                                id={"gfp1DZpn5yU"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-thumbnail-div">
                            <img id="thumbnail" src={ColorsImg} />
                        </div>
                        <div className="film-about-div">
                            <p className="film-about">
                                The Colors of Macedonia is a half-hour documentary film comissioned by the PBS affiliated KOCE-TV from the Macedonian Art council in 2004. The film explores the cultural and spitual riches of Macedonia spanning two thousand years. It premiered on June 4th, 2004 on KOCE-TV (PBS).
                                <br/>
                                <br/>
                                <br/>
                            </p>
                            <div className="film-img-div">
                                <img className="film-img" src={Koce} />
                            </div>
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Macedonia