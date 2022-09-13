import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HomeFilms from "./home-films"
import HomeMarquee from "./home-marquee"
import "./home.css"
import {Carousel} from 'react-responsive-carousel';
import {Carousel1} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))

    return (
        <div className='home-outer-div'>
            <div className="home-inner-div">
                {/* <div className="marquee-outer-div">
                    <HomeMarquee />
                </div>*/} 
                <div>
                <Carousel wrapAround={true} slidesToShow={3}>
  <img src="banner1pavsite.png" />
  <img src="banner2pavsite.png" />
 
</Carousel>
                    </div> 
                {/*<div>
                    <Carousel>
                        <div>
                            <img src="banner1pavsite.png" />
                            <p className="legend"></p>
                        </div>
                        <div>
                            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
                */} 
                <div className="quote-outer-div">
                    <div className="quote-inner-div">
                        <div className="quote-left-div">
                            <p className="quote-left">
                                In the words of 
                                Calvin Coolidge . . .
                            </p>
                        </div>
                        <div className="quote-right-div">
                            <p className="quote-right">
                                ❝ Press on. Nothing in the world can take the place of persistence. Talent will not: nothing is more common than unrewarded talent. Education alone will not : the world is 
                                full of educated failures. Persistence alone is omnipotent. ❞
                            </p>
                        </div>
                    </div>
                </div>
                <div className="films-outer-div">
                    <HomeFilms />
                </div>
                <div className="films-link-div">
                    <div className="films-about-div">
                        <h1>PAVLINA Ltd. is a New York based independent production company engaged in the development and production of feature films and documentaries. It was incorporated in 1986 by Pavlina Proevska, President and General Partner. The co-producing partner of Pavlina Ltd., FilmsZaNas DOOEL is based in The Republic of Macedonia. </h1>
                    </div>
                    <div className="films-link-button">
                        <Link to="/projects" id="films-button">
                            See Films
                        </Link>
                    </div>
                </div>
            </div> 
        </div>    
    )

}

export default Home