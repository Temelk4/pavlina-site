import React, { useEffect, useState } from "react"
import "./gallery.css"

//ORPHAN IMGS
import orphan1 from "../../images/gallery/orphan1.webp"
import orphan2 from "../../images/gallery/orphan2.webp"
import orphan3 from "../../images/gallery/orphan3.webp"
import orphan4 from "../../images/gallery/orphan4.webp"
import orphan5 from "../../images/gallery/orphan5.webp"
import orphan6 from "../../images/gallery/orphan6.webp"

//PERFUME IMGS
import perfume1 from "../../images/gallery/perfume1.webp"
import perfume2 from "../../images/gallery/perfume2.webp"
import perfume3 from "../../images/gallery/perfume3.webp"
import perfume4 from "../../images/gallery/perfume4.webp"
import perfume5 from "../../images/gallery/perfume5.webp"
import perfume6 from "../../images/gallery/perfume6.webp"

//AMERICAN IMGS
import american1 from "../../images/gallery/american1.webp"
import american2 from "../../images/gallery/american2.webp"
import american3 from "../../images/gallery/american3.webp"
import american4 from "../../images/gallery/american4.webp"
import american5 from "../../images/gallery/american5.webp"
import american6 from "../../images/gallery/american6.webp"

//HELL IMGS
import hell1 from "../../images/gallery/hell1.webp"
import hell2 from "../../images/gallery/hell2.webp"
import hell3 from "../../images/gallery/hell3.webp"
import hell4 from "../../images/gallery/hell4.webp"
import hell5 from "../../images/gallery/hell5.webp"
import hell6 from "../../images/gallery/hell6.webp"

//MAGIC IMGS
import magic1 from "../../images/gallery/magic1.webp"
import magic2 from "../../images/gallery/magic2.webp"
import magic3 from "../../images/gallery/magic3.webp"
import magic4 from "../../images/gallery/magic4.webp"
import magic5 from "../../images/gallery/magic5.webp"
import magic6 from "../../images/gallery/magic6.webp"


const Gallery = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='gallery-outer-div'>
            <div className="gallery-inner-div">
               <div className="gallery-header-div">
                    <h1 className="gallery-header">Location Shots</h1>
               </div>
               <div className="gallery-wrapper">
                    <div className="location-wrapper">
                        <h1 className="location-header">
                            My Heart Is No Longer An Orphan
                        </h1>
                        <div className="location-imgs-wrapper">
                            <div className="location-img-div">
                                <img className="location-img" src={orphan1} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={orphan2} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={orphan3} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={orphan4} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={orphan5} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={orphan6} />
                            </div>
                        </div>
                    </div>
               </div>
                <div className="gallery-wrapper">
                    <div className="location-wrapper">
                        <h1 className="location-header">
                            The Promise of Perfume
                        </h1>
                        <div className="location-imgs-wrapper">
                            <div className="location-img-div">
                                <img className="location-img" src={perfume1} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={perfume2} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={perfume3} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={perfume4} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={perfume5} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={perfume6} />
                            </div>
                        </div>
                    </div>
               </div>
                <div className="gallery-wrapper">
                    <div className="location-wrapper">
                        <h1 className="location-header">
                            My American Pilgrimage
                        </h1>
                        <div className="location-imgs-wrapper">
                            <div className="location-img-div">
                                <img className="location-img" src={american1} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={american2} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={american3} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={american4} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={american5} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={american6} />
                            </div>
                        </div>
                    </div>
               </div>
                <div className="gallery-wrapper">
                    <div className="location-wrapper">
                        <h1 className="location-header">
                            Happy Hell Night
                        </h1>
                        <div className="location-imgs-wrapper">
                            <div className="location-img-div">
                                <img className="location-img" src={hell1} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={hell2} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={hell3} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={hell4} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={hell5} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={hell6} />
                            </div>
                        </div>
                    </div>
               </div>
               <div className="gallery-wrapper">
                    <div className="location-wrapper">
                        <h1 className="location-header">
                            The Magic Snowman
                        </h1>
                        <div className="location-imgs-wrapper">
                            <div className="location-img-div">
                                <img className="location-img" src={magic1} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={magic2} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={magic3} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={magic4} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={magic5} />
                            </div>
                            <div className="location-img-div">
                                <img className="location-img" src={magic6} />
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>    
    )

}

export default Gallery