import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./home.css"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"

import Snowman from "../../images/snow2.png"
import Orphan from "../../images/heart_orphan.webp"
import Gustela from "../../images/gustela-dances.webp"

import Between from "../../images/PowmBOOKWSHADOW.webp"
import MagicBook from "../../images/snowmanBOOKWSHADOW.webp"

const HomeFilms = ( { mobile, visible } ) => {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
        console.log("clicked")
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
        console.log("clicked")
    }
  
    return (
        <div className='films-inner-div'>
            <div className="films-wrapper">
                <div className="films-header">
                    <p>Active Film & Media Projects</p>
                </div>
                <div className="films-carousel-outer-div">
                    <BsArrowLeftCircle id="arrow-icon" onClick={slideLeft}/>
                    <div className="films-carousel-div" id="slider">
                        <div className="films-thumbnails-wrapper">
                            <div className="films-thumbnail">
                                <Link to="/magic-snowman-redux">
                                    <img className="thumbnail-home" src={Snowman} />
                                </Link>
                            </div> 
                        </div>
                        <div className="films-thumbnails-wrapper">
                            <div className="films-thumbnail">
                                <Link to="/my-heart-is-no-longer-an-orphan">
                                    <img className="thumbnail-home" src={Orphan} />
                                </Link>
                            </div> 
                        </div>
                        <div className="films-thumbnails-wrapper">
                            <div className="films-thumbnail">
                                <Link to="/gustela-dances">
                                    <img className="thumbnail-home" src={Gustela} />
                                </Link>
                            </div> 
                        </div>
                        <div className="films-thumbnails-wrapper">
                            <div className="films-thumbnail">
                                <Link to="/between-two-worlds">
                                    <img className="thumbnail-home" src={Between} />
                                </Link>
                            </div> 
                        </div>

                        <div className="featurefilms-thumbnails-wrapper-magicbook">
                            <div className="thumbnail-wrapper-magicbook">
                                <img className="thumbnail-magicbook" src={MagicBook} />
                                <div className="magicbook-about">
                                    <h1 id="magicbook-header">The Magic Snowman</h1>
                                    <p>Based on the feature film The Magic Snowman.</p>
                                    <p>With Sir Roger Moore as the VOICE of the magic snowman</p>
                                    <br/>
                                    <p>Narrated by Lily Talevski</p>
                                    <p>Music by Ben B. Goss</p>
                                    <p>Mixed by Canyon Silliman</p>
                                    <p>Sound effects by Dirk Eggermont</p>
                                    <br/>
                                    <p>Release date: January 2, 2022</p>
                                    <p>Languages: English, Spanish</p>
                                    <br/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <BsArrowRightCircle id="arrow-icon" onClick={slideRight} />
                </div>
                
            </div>
        </div>    
    )

}

export default HomeFilms