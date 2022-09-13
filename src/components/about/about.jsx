import React, { useEffect, useState } from "react"
import "./about.css"

import pavImg from "../../images/PavlinaBioPicture.png"
import pav1 from "../../images/bio/afm.jpeg"

const About = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='about-outer-div'>
            <div className="about-inner-div">
                <div className="about-header-div">
                    <p id="about-header">
                        Production - A combination of persistence ... and blind faith. 
                    </p>
                </div>
                <div className="about-top-div">
                    <div className="about-left-wrapper">
                        <div className="about-img-wrapper">
                            <div className="about-img-div">
                                <div className="about-img">
                                    <img id="pav-img" src={pavImg} />
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="about-right-wrapper">
                        <div className="about-main-div">
                            <p>
                                PAVLINA Ltd. is a New York based independent production company engaged in the development and production of feature films and documentaries. It was incorporated in 1986 by Pavlina Proevska, President and General Partner. The co-producing partner of Pavlina Ltd., FilmsZaNas DOOEL is based in The Republic of Macedonia. 
                                <br/>
                                <br/>
                                The first feature film produced by Pavlina Ltd. in 1987 was The Magic Snowman, a live action children's fairy tale starring Roger Moore as the voice of the Magic Snowman. The film's gross receipts to date are ten times the original low-budget cost. Distributed through Miramax/Buena Vista International it has been seen by twenty million children in the United States.
                                <br/>
                                <br/>
                                The second feature produced in 1992 was the supernatural thriller Happy Hell Night, starring Darren McGavin. The film was distributed worldwide by several international distributors and released on DVD by AnchorBay entertainment. More recently,  the legendary Samuel Goldwyn Films acquired the right sot distribution for North America.
                                <br/>
                                <br/>
                                To ensure a successful distribution life and minimize investment risks, the company focuses on development and production of perennial stories. In keeping with such business strategy, over the past ten years the company has financed the acquisition and development of several children's properties.
                                <br/>
                                <br/>
                                The company's strength is the original content of the stories it develops and produced and while through its feature films it offers popular entertainment, the documentaries celebrate people whose lives have left an imprint on the human experience.
                            </p>
                        </div>
                    </div>
                </div>
               <div className="about-quote-div">
                    <p id="about-quote">
                        ❝ The creative mind plays with the objects it loves. ❞  
                    </p>
                    <p id="about-quote-author">
                       - Carl Jung
                    </p>
               </div>
               <div className="about-bio-div">
                    <div className="pavlina-bio-div">
                        <p className="pavlina-bio">
                            A native of Macedonia, Pavlina Proevska studied Public Relations in Paris and worked in the news department at CBS News as well as in the field, for USA Cable Networks. The highlights of her tenure at CBS News was as part of the team covering the Regan-Gorbachev Summit in Geneva, in 1986. For the USA Cable Network, she was part of the team working on the promotion of the thriller Death Train, in Slovenia in 1993 where she was introduced to Irish drinking by the star of the film, Pierce Brosnan.
                        <br/>
                        <br/>
                            Ms. Proevska is currently working on the REDUX of The Magic Snowman for release on DVD/Blu-Ray and VOD platforms in 2022. She is also in pre-production of a short docu-drama, My Heart Is No Longer an Orphan, and she will be directing it late this summer in Montenegro, Macedonia. 
                        <br/>
                        <br/>
                            She has recently completed two documentary films, The Promise of Perfume, and the biopic My American Pilgrimage.
                        <br/>
                        <br/>
                            Ms. Proevska is active in the promotion of Macedonia's cultural heritage as the founder and Executive Director of the Macedonian Arts Council. She is fluent in five languages and lives and works in New York City.        
                        </p>
                    </div>
                     <div className="pavlina-img-div">
                       <img id="pav-img" src={pav1} />
                    </div>
               </div>
            </div> 
        </div>    
    )

}

export default About