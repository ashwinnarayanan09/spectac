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
        <div className="container-fluid">
            <h2>SPECTAC</h2>

            <h5>Rekrytering och Bemanning</h5><br/>

            <section className ="jumbotron">

                Spectac Rekrytering Och Bemanning is a provider of innovative consulting services for your manpower needs. Our company is a start-up in Sweden, but our founder has six years of HR experience from several practice industries such as retail, IT and construction. <br/><br/>

                We understand industry needs and deliver solutions that leverage the business of our customers.

                Furthermore, we pride ourselves on delivering high quality and value addition to our customers.

            </section>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recruitment</h5>
                            <p className="card-text"></p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Staffing</h5>
                            <p className="card-text"></p>

                        </div>
                    </div>
                </div>
            </div><br/>
            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                    <i className="fab fa-html5"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-css3-alt"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-js-square"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-angular"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-react"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-node-js"></i>
                </li>

                <li className="list-inline-item">
                    <i className="fab fa-wordpress"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-npm"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-java"></i>
                </li>
                <li className="list-inline-item">

                </li>
            </ul>

        </div>

    );
}

export default Home;