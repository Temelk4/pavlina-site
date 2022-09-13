import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import BetweenImg from "../../../images/PowmBOOKWSHADOW.webp"
import Between1 from "../../../images/between1.webp"
import Between2 from "../../../images/between2.webp"
import Between3 from "../../../images/between3.webp"


const Between = ( { mobile, visible } ) => {

    const [click1, setClick1] = useState(false)

    const handleClick1 = (e) => {
        e.preventDefault()
        !click1 ? setClick1(true) : setClick1(false)
    }

    const [click2, setClick2] = useState(false)

    const handleClick2 = (e) => {
        e.preventDefault()
        !click2 ? setClick2(true) : setClick2(false)
    }

       const [click3, setClick3] = useState(false)

    const handleClick3 = (e) => {
        e.preventDefault()
        !click3 ? setClick3(true) : setClick3(false)
    }

    useEffect(() => window.scroll(0,0), console.log(click1))
  
    return (
        <div className='film-outer-div'>
            <div className="film-inner-div">
               <div className="film-top-div">
                   <div className="film-info-div-between">
                        <div className="film-title">
                            <h1>Between Two Worlds</h1>
                        </div>
                         <div className="future-film-about-div">
                            <p className="future-film-about">
                               Between Two Worlds is a collection of poems written by the Montenegrin-born poet Miodrag Miloshević, whose life is the inspiration for a short film, My Heart Is No Longer An Orphan.
                                <br/>
                                <br/>
                                The film tells the story of two young poets who fall in love at a poetry festival in Macedonia, in 1969 where they spend three days that will mark them for the rest of their lives. Separated by a series of events that will keep them apart for the next fifty years, the poet, now 70-years old finds the girl. The poems in the book reflect his search and longing for something that he lost half a century ago.
                                <br/>
                                <br/>
                                It was the poet's wish that the English and French translations be interpretations and not direct translations. In his words, "it should be the privilege of the readers to experience the verses mirroring their own feelings."
                                <br/>
                                <br/>
                                The illustrations by Kathi Ha add a palpable feeling to the words on the page and allows the reader to catch a glimpse of the poet's dark and longing heart.
                                <br/>
                                <br/>
                                Available on Amazon Books
                            </p>
                        </div>
                   </div>
                   <div className="film-video-div-between">
                        <div className="film-video-wrapper">
                            <img id="thumbnail-between" src={BetweenImg} />
                        </div>
                   </div>
               </div>
               <div className="film-bottom-div">
                   <div className="film-bottom-wrapper">
                        <div className="film-between-div">
                            <div className="between-img-wrapper">
                                <img id="between-img" src={Between1} />
                                <img id="between-img" src={Between2} />
                                <img id="between-img" src={Between3} />
                            </div>
                           
                        </div>
                   </div>
                   
               </div>
            </div> 
        </div>    
    )

}

export default Between