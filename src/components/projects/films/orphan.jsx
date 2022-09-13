import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"
import OrphanImg from "../../../images/heart_orphan.webp"

const Orphan = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>My Heart is No Longer an Orphan</h1>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Screenplay by</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Pavlina Proevska</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Director</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Pavlina Proevska</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Cinematographer</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Dejan Dimeski</h1>
                            </div>
                        </div>
                               <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Choreographer</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Gianni Santucci</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Composer</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Ben B. Goss</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Producer</h1>
                            </div>
                            <div className="film-detail">
                                <h1>FilmsZaNas d.o.o.e.l.</h1>
                            </div>
                        </div>
                        <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Co-producers</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Kaval Films d.o.o.e.l.</h1>
                                <h1>Roundabout d.o.o.e.l.</h1>
                            </div>
                        </div>
                         <div className="film-detail-wrapper">
                            <div className="film-detail-header">
                                <h1>Location(s)</h1>
                            </div>
                            <div className="film-detail">
                                <h1>Macedonia, Montenegro, USA</h1>
                            </div>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                            <Youtube 
                                mobile={mobile} 
                                id={"q4R1JfTIOpQ"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-thumbnail-div">
                            <img id="thumbnail" src={OrphanImg} />
                        </div>
                        <div className="film-about-div">
                            <p className="film-about">
                                In March of 1969, she was seventeen and he twenty years old, when they met at a poetry read in a city in Macedonia, then part of a country known as the jewel of the Balkans.
                                <br/>
                                <br/>
                                He was more of a poet than she was, always brooding and sad even when he was happy. She was a bubbly tomboy who liked his attention and was tickled by the nickname he gave her, Paola. Salvatore Adamo's Paola Dolce Paola played on every radio station in Europe and the thought that he could compare her to the real princess amused her. He claimed his Paola was just as pretty and as personable as the real Paola Margherita Giuseppina Maria Antonia Consiglia. They had three days together and he left the festival convinced that the other half of his heart was now filled. She was molded by the sun, he said, and she was the one.
                                <br/>
                                <br/>
                                That August, they would miss each other, at yet another poetry festival, in the world famous city of Struga, in Macedonia. She arrives two hours after he leaves to go back to his native Montenegro. Shortly after, Paola leaves for the US, erasing the memory of him. For the next fifty years, as if to punish himself for his early departure, he would revisit often her last letter in which she cries out, "Where are you?" The cry has now become his quest, as he searched to find her, and does, in 2019. The brooding young man is now a melancholy seventy years old, and the tomboy, a strong-willed and independent woman living on her own in New York City. Will they recapture the sunrays of their youth? We only know half the ending, as it is much too late for the land. But maybe not for the distant rays of the magic hour to shine upon the two of them once more.
                            </p>
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Orphan