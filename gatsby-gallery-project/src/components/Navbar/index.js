import React, { useState, useEffect } from 'react'
import { IconContext } from "react-icons/lib"
import {Nav, NavbarContainer, NavIcon, NavLogo} from "./NavbarElements"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)
    
    const changeNav = () => {
        if (window.scrollY >= 80){
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return(
        <>
            <IconContext.Provider value ={{ color: "#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            ProjectGallery
                        </NavLogo>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar