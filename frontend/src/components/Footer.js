import React from "react";
import { SocialIcon } from 'react-social-icons';

const title = {
    color:'pink',
    textDecoration:'none'
};


function Footer(){

    return(

        <div className="navbar navbar-expand-lg navbar-light bg-dark footer">

            <div className="row">
                <div className="col-sm-6">
                    <p style={title}>
                        Haganlundsgatan 18,
                        Solna
                    </p>
                </div>
                <div className="col-sm-6" >
                    <div className="float-right">
                    <p style={title}>Follow us on social media</p>  &nbsp;
                    <SocialIcon url="https://www.linkedin.com/company/spectac-rekrytering-och-bemanning/" />&nbsp;
                    <SocialIcon url="https://www.facebook.com/spectacrecruitment/" /> <br/>
                    </div>

                </div>
            </div>




        </div>

    );

}

export default Footer;