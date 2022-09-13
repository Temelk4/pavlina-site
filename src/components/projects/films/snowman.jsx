import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import MagicSnowmanImg from "../../../images/the_magic_snowman.jpg"
import SnowmanPoster from "../../../images/SnowmanPoster.jpg"

const MagicSnowman = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div">
                        <div className="film-title">
                            <h1>The Magic Snowman</h1>
                        </div>
                        <p className="magic-tagline">You can hear him speak if you believe...</p>
                        <br/>
                        <br/>
                        <p className="magic-tagline">Distributed by BVI/Miramax</p>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                             <Youtube 
                                mobile={mobile} 
                                id={"aE3pq0ygwjo"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                       <div className="thumbnail-outer-wrapper">
                            <div className="film-thumbnail-div-snowman">
                                <img id="thumbnail" src={MagicSnowmanImg} />
                            </div>
                            <div className="film-thumbnail-div-snowman">
                                <img id="thumbnail" src={SnowmanPoster} />
                            </div>
                       </div>
                        
                        <div className="film-about-div">
                            <p className="film-about">
                                The Magic Snowman was produced in 1988 by Pavlina Ltd. in a co-production with FIT a production company based in Yugoslavia. The film was dedicated to UNICEF which received a portion of the producer's revenue. The film carries a powerful message in the context of a wonderful storyline featuring the character of Lumiukko, the magical snowman. Lumiukko travels the world with the help of his friend and lifelong companion, Gustella the wind, in order to help children by teaching them valuable lessons about honesty, integrity, and determination. All future magic snowman movies embrace and explicate such themes.
                                <br/>
                                <br/>
                                Over the past ten years, The Magic Snowman has aired on The Disney Channel more than 38 times in children’s prime time slots. It is estimated that twenty million children have seen the film in the United States alone. Miramax Films has worldwide distribution rights to the original film. The video rights are with Artisan Entertainment and the film was re-released for Christmas 1999 even though sell-through on the film began in June 1995. Other major distributors who have acquired the original film are The Sky Channel in the UK, Italy's RAI Uno, and Spain's Television Española. The film has been sold worldwide in over thirty international markets. The Magic Snowman was a seasonal staple among children's television programs for seventeen years.
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

export default MagicSnowman