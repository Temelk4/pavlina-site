import React, { useEffect, useState } from "react"
import "./footer.css"
import { FaFacebookSquare, FaYoutube, FaLinkedin, FaVimeo, FaTwitter, FaImdb } from "react-icons/fa"
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md"

const Footer = ( { mobile } ) => {

    // useEffect(() => console.log("mobile", mobile))
  
    return (
        <div className='footer-outer-div'>
            <div className="footer-inner-div">
                <div className="copyright-outer-div">
                    <div className="footer-contact-div">
                        <div className="footer-contact-wrapper">
                            © PAVLINA LTD. 2022
                        </div>
                    </div>
                    <div className="footer-contact-outer-wrapper">
                        <div className="footer-contact-div">
                            <div className="footer-contact-wrapper">
                                <MdOutlineMail className="contact-icon" /> 
                                pavlinaltd@gmail.com 
                            </div>
                        </div>
                        <div className="footer-contact-div">
                            <div className="footer-contact-wrapper">
                                <MdOutlinePhone className="contact-icon" /> 
                                212-799-0009 
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="social-outer-div">
                    <ul className="social-inner-div">
                        <li className="social-link-div">
                            <a href="https://www.facebook.com/pproevska" target="_blank">
                                <FaFacebookSquare id="social-link"/>
                            </a>
                        </li>
                        <li className="social-link-div">
                            <a href="https://www.youtube.com/user/PavlinaLTD/videos" target="_blank">
                                <FaYoutube id="social-link"/>
                            </a>
                        </li>
                               <li className="social-link-div">
                            <a href="https://www.linkedin.com/in/pavlina-proevska-533773169/" target="_blank">
                                <FaLinkedin id="social-link"/>
                            </a>
                        </li>
                        <li className="social-link-div">
                            <a href="https://vimeo.com/user7928868" target="_blank">
                                <FaVimeo id="social-link"/>
                            </a>
                        </li>
                               <li className="social-link-div">
                            <a href="https://twitter.com/Info_MacArts" target="_blank">
                                <FaTwitter id="social-link"/>
                            </a>
                        </li>
                        <li className="social-link-div">
                            <a href="https://www.imdb.com/name/nm0698464/" target="_blank">
                                <FaImdb id="social-link"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>    
    )

}

export default Footer