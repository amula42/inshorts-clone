import React, { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import './Navinshorts.css';

const Navinshorts = () => {

    const [scrolled, setScrolled] = useState();

    const navbar = () => {
        setScrolled(window.scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", navbar);
        return () => {
            window.removeEventListener("scroll", navbar);
        }
    });

    return (
        <>
            <div id="nav_bar" className={scrolled ? 'inav scrolled' : 'inav'}>
                <div className="menu">
                    <Hamburger />
                </div>
                <div className="logo_inshorts">
                    <img src="/assets/logo_inshorts.png" alt="logo_inshorts" />
                </div>
            </div>
        </>
    )
}

export default Navinshorts
