import React from 'react';
import Hamburger from './Hamburger';
import './Navinshorts.css';

const Navinshorts = () => {

    return (
        <>
            <div id="nav_bar" className="inav">
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
