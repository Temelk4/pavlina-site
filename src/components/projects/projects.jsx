import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./projects.css"

import Snowman1 from "../../images/The-magic-snowman-vhs-cover.jpg"
import Hell from "../../images/happy-1.jpeg"
import Perfume from "../../images/Poster-POP.webp"
import Pilgrimage from "../../images/My-American_Pilgrimage.webp"
import Colors from "../../images/colors-macedonia.webp"
import Gotse from "../../images/gotse-poster.webp"
import Future from "../../images/in-development.webp"
import Between from "../../images/PowmBOOKWSHADOW.webp"
import MagicBook from "../../images/snowmanBOOKWSHADOW.webp"

const Projects = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
    
    return (
        <div className='projects-outer-div'>
            <div className="projects-inner-div">
                <div className="film-outer-wrapper">
                    <div className="film-inner-wrapper">
                        <div className="film-header">
                            <h1>Feature Films</h1>
                        </div>
                        <div className="film-thumbnails-wrapper">
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                    <Link to="/the-magic-snowman">
                                        <img className="thumbnail" src={Snowman1} />
                                    </Link>
                                </div> 
                            </div>
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                     <Link to="/happy-hell-night">
                                        <img className="thumbnail" src={Hell} />
                                    </Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="film-outer-wrapper">
                    <div className="film-inner-wrapper">
                        <div className="film-header">
                            <h1>Documentaries / Short Films</h1>
                        </div>
                        <div className="film-thumbnails-wrapper">
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                     <Link to="/promise-of-perfume">
                                        <img className="thumbnail" src={Perfume} />
                                    </Link>
                                </div> 
                            </div>
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                    <Link to="/my-american-pilgrimage">
                                        <img className="thumbnail" src={Pilgrimage} />
                                    </Link>
                                </div> 
                            </div>
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                    <Link to="/colors-of-macedonia">
                                        <img className="thumbnail" src={Colors} />
                                    </Link>
                                </div> 
                            </div>
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                     <Link to="/gotse">
                                        <img className="thumbnail" src={Gotse} />
                                    </Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="film-outer-wrapper">
                    <div className="film-inner-wrapper">
                        <div className="film-header">
                            <h1>Published Projects</h1>
                        </div>
                        <div className="film-thumbnails-wrapper">
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                    <Link to="/between-two-worlds">
                                        <img className="thumbnail" src={Between} />
                                    </Link>
                                </div> 
                            </div>
                            <div className="film-thumbnail">
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
                    </div>
                </div> */}
                <div className="film-outer-wrapper">
                    <div className="film-inner-wrapper">
                        <div className="film-header">
                            <h1>In Development</h1>
                        </div>
                        <div className="film-thumbnails-wrapper">
                            <div className="film-thumbnail">
                                <div className="thumbnail-wrapper">
                                    <Link to="/in-development">
                                        <img className="thumbnail-future" src={Future} />
                                    </Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>    
    )

}

export default Projects