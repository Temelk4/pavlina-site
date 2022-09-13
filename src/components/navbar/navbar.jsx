import React, { useEffect, useState } from "react"
import "./navbar.css"
import { AiOutlineMenu, AiFillCloseSquare} from "react-icons/ai"
import logo from "../../images/Logo_banner.gif"
import { Link } from "react-router-dom"

const NavBar = ( { mobile, visible } ) => {

    const [click, setClick] = useState(false)
    const [activeNavLinkId, setActiveNavLinkId] = useState('');

    // useEffect(() => console.log("mobile", mobile))
    
    const handleClick = () => setClick(true)
    
    const closeMenu = () => setClick(false)

    const handleMobileIcon = () => {
        if (mobile && !click) {
            return <AiOutlineMenu className="menu-icon" onClick={handleClick}/>
        } else if (mobile && click) {
            return <AiFillCloseSquare className="menu-icon" onClick={closeMenu}/>
        } else {
            return ""
        }
    }

    return (
        <div className='navbar-outer-div'>
            <div className="navbar-inner-div-border">
                <div className="logo-div">
                    <Link to="/pavlinaltd/">
                        <img id="nav-logo" src={logo}/>
                    </Link>
                </div>
                <div className="mobile-menu-icon-div">
                    {handleMobileIcon()}
                </div>
                <div className={mobile && click ? "links-mobile-div" : "links-div"} >
                    <div className={mobile && click ? "links-inner-mobile-div" : "links-div"}>
                        {/* {mobile ? <AiFillCloseSquare className="close-icon" onClick={closeMenu}/> : ""} */}
                        {/* {mobile ? <p>MOBILE LINKS</p> : ""} */}
                        <div className={mobile && click ? "link-mobile-div" : "link-div"}>
                            <Link to="/about" id={mobile && click ? "nav-mobile-link" : "nav-link"}>
                                About
                            </Link>
                        </div>
                         <div className={mobile && click ? "link-mobile-div" : "link-div"}>
                           <Link to="/projects"  id={mobile && click ? "nav-mobile-link" : "nav-link"}>
                                The Films
                            </Link>
                        </div>
                        <div className={mobile && click ? "link-mobile-div" : "link-div"}>
                            <Link to="/gallery"  id={mobile && click ? "nav-mobile-link" : "nav-link"}>
                                Gallery
                            </Link>
                        </div>
                        <div className={mobile && click ? "link-mobile-div" : "link-div"}>
                            <Link to="/contact"  id={mobile && click ? "nav-mobile-link" : "nav-link"}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>    
    )

}

export default NavBar