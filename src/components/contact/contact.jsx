import React, { useEffect, useState } from "react"
import "./contact.css"
import SimpleMap from "./map"


const Contact = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))

    const location = {
    address: '380 Rector Pl., 21E New York, NY 10280, USA',
    lat: 40.709341162526115,
    lng: -74.01780974617034
    }
  
    return (
        <div className='contact-outer-div'>
            <div className="contact-inner-div">
                <div className="contact-header-div">
                    <p id="contact-header">
                       Contact Us
                    </p>
               </div>
               <div className="contact-outer-wrapper">
                    <div className="contact-wrapper">
                    <div className="contact-box">
                            <div className="contact-name">
                                <h1>Pavlina Ltd.</h1>
                            </div>
                            <div className="contact-info-wrapper">
                                <div className="contact-email">
                                    <div className="email-header">
                                        <h1>Email</h1>
                                    </div>
                                    <div className="email-body">
                                        <h1>pavlinaltd@gmail.com</h1>
                                    </div>
                                </div>
                                <div className="contact-phone">
                                    <div className="phone-header">
                                        <h1>Phone | Viber | WhatsApp </h1>
                                    </div>
                                    <div className="phone-body">
                                        <h1>212-799-0009</h1>
                                    </div>
                                </div>
                                <div className="contact-skype">
                                    <div className="skype-header">
                                        <h1>Skype</h1>
                                    </div>
                                    <div className="skype-body">
                                        <h1>Resen51</h1>
                                    </div>
                                </div>
                                <div className="contact-skype">
                                    <div className="skype-header">
                                        <h1>Twitter</h1>
                                    </div>
                                    <div className="skype-body">
                                        <h1>@SNOWMANREDUX</h1>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="contact-wrapper">
                        <div className="contact-box">
                            <div className="contact-name">
                                <h1>FilmsZaNac d.o.o.e.l</h1>
                            </div>
                            <div className="contact-info-wrapper">
                                <div className="contact-email">
                                    <div className="email-header">
                                        <h1>Email</h1>
                                    </div>
                                    <div className="email-body">
                                        <h1>filmszanas@gmail.com</h1>
                                    </div>
                                </div>
                                <div className="contact-phone">
                                    <div className="phone-header">
                                        <h1>Phone</h1>
                                    </div>
                                    <div className="phone-body">
                                        <h1>212-799-0009</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-wrapper">
                    <div className="contact-box">
                        <div className="contact-name">
                            <h1>Macedonian Arts Council</h1>
                        </div>
                        <div className="contact-info-wrapper">
                            <div className="contact-email">
                                    <div className="email-header">
                                    <h1>Email</h1>
                                </div>
                                <div className="email-body">
                                    <h1>macartsorg@gmail.com</h1>
                                </div>
                            </div>
                            <div className="contact-phone">
                                    <div className="phone-header">
                                    <h1>Phone</h1>
                                </div>
                                <div className="phone-body">
                                    <h1>212-799-0009</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
               </div>
                <div className="contact-bottom-div">
                    <div className="contact-bottom-inner">
                        <div className="contact-left-div">
                            email
                        </div> 
                        <div className="contact-right-div">
                            <SimpleMap location={location} zoomLevel={15} />
                        </div>
                    </div>
                </div>
            </div> 
        </div>    
    )

}

export default Contact