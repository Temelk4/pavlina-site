import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import HellPoster from "../../../images/hhnposter.webp"

const Hell = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))

    return (
        <div className='film-outer-div'>
            <div className="film-inner-div-hell">
               <div className="film-top-div-hell">
                   <div className="film-info-div">
                        <div className="film-title-hell">
                            <h1>Happy Hell Night</h1>
                        </div>
                        <img src={HellPoster} className="hell-poster"/>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                             <Youtube
                                mobile={mobile}
                                id={"k_X7EnLEjNM"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper-hell">
                        <div className="film-about-div-hell">
                            <p className="film-about">
                                Twenty-five years ago at Winfield College, psycho-priest Zachary Malius murdered seven frat boys.
                                <br/>
                                <br/>
                                Malius is waiting, secretly locked in Winfield Insane Asylum. Now, he's just a myth; the local boogie man, the sick joke used to scare children. Malius is not afraid to die; living has cured him of that. Sonny Collins, a star freshman student at Winfield College has nerves of steel and a taste for the heroics. He faces the ultimate Phi Delta Kappa hazing: photograph the mythical, monstrous Malius.
                                <br/>
                                <br/>
                                Harry Collins, Sonny's brother, is already a Phi Delta Kappa. In a jealous rage and caught in a love triangle with Sonny's girl, Harry would like to even the score. He wants to scare his brother.
                                <br/>
                                <br/>
                                But when Sonny finds Malius something goes wrong, Malius escapes. The horrors of his rampage, the mutilation of the Phi Delta Kappa brothers is recreated. But Malius is more than a psychotic killer, he is the devil's henchman brought back from the dead by Sonny and his father, Henry Collins (played by Darren Mc Gavin).
                                <br/>
                                <br/>
                                Henry Collins tells his sons the truth; he sold his soul. He must prepare to help them outlive him.
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

export default Hell