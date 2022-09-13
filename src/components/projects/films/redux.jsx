import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"
import Snowman from "../../../images/snow2.png"

const Redux = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>The Magic Snowman REDUX</h1>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Director</h1>
                            </div>
                            <div className="film-detail">
                                <h1>C. Stanner</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Produced by</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Pavlina Proevska</h1>
                            </div>
                        </div>
                         <div className="film-detail-wrapper">
                            <div className="film-detail">
                                <h1>With Roger Moore as the voice of Lumiukko</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>The Children</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Justin Fried, Dragana Marjanovic, Pavle Bojkovski</h1>
                            </div>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper-redux">
                            <Youtube 
                                mobile={mobile} 
                                id={"hUMfTop4K-g"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-thumbnail-div">
                            <img id="thumbnail" src={Snowman} />
                        </div>
                        <div className="film-about-div">
                            <p className="film-about">
                                THEN: Lumiukko, the magic snowman was the voice of Roger Moore and adored by children worldwide. But he did not smile, wink or frown. He was too lazy for that!
                                <br/>
                                <br/>
                                In the 2022 reduxed version of this perennial children's film, Lumiukko will get visibly angry, sad, concerned, and often, annoyed.
                                <br/>
                                <br/>
                                With his myriad of emotions, he will engage the children more than ever before and ultimately teaches them to believe in themselves and the choices they have to make.
                                <br/>
                                <br/>
                                Through the wonderful possibilities offered by CGI and by adding a fresh new score and a sound mix, the re-edited version of this evergreen staple will give the new generation of children a fresh look at a film their parents grew up with.
                            </p>
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Redux