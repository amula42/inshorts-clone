import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <span className="name">
                    Inshorts clone made by -
                    <a href="https://www.linkedin.com/in/iamakashmula/" target="__blank">
                    &nbsp;Akash Mula
                    </a>
                </span>
                <hr style={{ width: "90%" }} />
                <div className="iconContainer">
                    <a href="https://www.instagram.com/akash.mula/" target="__blank">
                    <InstagramIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/iamakashmula/" target="__blank">
                    <LinkedInIcon />
                    </a>
                    <a href="https://iamakashmula.herokuapp.com/" target="__blank">
                    <LinkIcon />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer
