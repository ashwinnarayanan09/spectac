import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer(){

    return(

        <div className="navbar navbar-expand-lg navbar-light bg-dark fixed-bottom">
            <p style={{color: "white"}}>Follow us on social media</p>  &nbsp;
            <SocialIcon url="https://www.linkedin.com/company/spectac-rekrytering-och-bemanning/" />&nbsp;
            <SocialIcon url="https://www.facebook.com/spectacrecruitment/" />

        </div>

    );

}

export default Footer;