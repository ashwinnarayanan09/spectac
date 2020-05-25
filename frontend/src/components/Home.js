import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <div style={{minWidth:"100%"}}>


            <section className ="jumbotron " style ={{backgroundColor: "pink"}}>
                <h2>SPECTAC</h2>

                <h5>Rekrytering och Bemanning</h5><br/>

                Spectac Rekrytering Och Bemanning is a provider of innovative consulting services for your manpower needs.

            </section>

            <div className="row">
                <div className="col">
                <div className="card">
                <img className="card-img-top" src={process.env.PUBLIC_URL+'/images/it.jpg'} alt="Card image" />
                <div className="card-body">
                <h4 className="card-title">IT & Telecom</h4>

                </div>
                </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+'/images/mech.jpg'} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">Mechanical</h4>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+'images/travel.jpg'} alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title">Tourism</h4>


                        </div>
                    </div>
                </div>
            </div><br/>



        </div>

    );
}

export default Home;