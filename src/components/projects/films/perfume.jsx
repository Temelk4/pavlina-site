import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import PerfumeImg from "../../../images/Poster-POP.webp"
import GustelaCastle from "../../../images/gustella-castle.webp"

const Perfume = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>The Promise of Perfume</h1>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                             <Youtube 
                                mobile={mobile} 
                                id={"wHQmgYQYo70"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-thumbnail-div">
                            <img id="thumbnail" src={PerfumeImg} />
                        </div>
                        <div className="film-about-div">
                            <p className="film-about">
                                The Promise of Perfume is a one-hour documentary shot in Provence, Tunisia, Bulgaria, French Guyana, Paris and New York. Featuring perfume industry notables, including Jacques Polge of Chanel, the five-time FIFI award-winning bottle designer, Marc Rosen, and the perfume critic of the New York Times, Chandler Burr. This is a film about women's love affair with perfume and the lasting power of scent. The tagline reads: Every perfume a woman wears is composed of two ingredients: scent and passion.
                                <br/>
                                <br/>
                                The film's story line incorporates numerous video clips and perfume ad images that were made available to the producer by Dior, Chanel, Elizabeth Arden, Coty, Victor and Rolf, Givenchy, Guerlain, Gucci, Marc Jacobs, Thierry Mugler, Lancome and much more.
                                <br/>
                                <br/>
                                Written, directed and produced by Pavlina Proevska under her production banner, Pavlina Ltd. The film is intended for TV distribution worldwide. The US distributor is PBS. La Cinquieme in France and sales companies such as From the Fence in the Netherlands, Beyond Distribution in the UK, RAI in Italy and Content Films in Canada are interested in distribution.
                                <br/>
                                <br/>
                                The Promise of Perfume brings the art and science of scent closer to the world audience in a refreshing manner that combines the "how to" of perfume with the poetry of this liquid that has often been called the essence of illusion.
                            </p>
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Perfume