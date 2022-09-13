import React, { useEffect, useState } from "react"
import "./home.css"

import Marquee1 from "../../images/marquee-perfume.svg"

const HomeMarquee = ( { mobile, visible } ) => {
  
    return (
        <div className='marquee-inner-div'>
            <div className="marquee-wrapper">
                <img className="marquee-img" src={Marquee1} />
            </div>
        </div>    
    )

}

export default HomeMarquee