import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import GotseImg from "../../../images/gotse-poster.webp"
import Koce from "../../../images/new_koce.png"

const Gotse = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>Gotse</h1>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Produced by</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Macedonian National Television</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Producers</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Pavlina Proevska, Mile Arsovski</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Director</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Ivan Mitevski - Kopola</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Written by</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Goran Stefanovski</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Starring</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Nenad Stojanovski as Gotse</h1>
                                <h1>His Eminence Bishop Kiril</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Shooting locations</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Skopje, Ohrid, and the village of Vevchani</h1>
                                <h1>The Republic of Macedonia</h1>
                            </div>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                            <Youtube 
                                mobile={mobile} 
                                id={"JFaPLtBNQSg"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-thumbnail-div">
                            <img id="thumbnail" src={GotseImg} />
                        </div>
                        <div className="film-about-div">
                            <p className="film-about">
                                This short film was commissioned by the Canadian-Macedonian Foundation on the occasion of a multimedia concert entitled Oro Makedonsko-Our Kanada at the Toronto Convention Center in the spring of 1994 organized to celebrate the independent Republic of Macedonia.
                                <br/>
                                <br/>
                                One of the show's components was a short live drama about the last five minutes in the life of Goce Delchev, a Macedonian national hero who is considered the father of modern Macedonia. The ten-minute short preceded the live segment.
                                <br/>
                                <br/>
                            </p>
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Gotse