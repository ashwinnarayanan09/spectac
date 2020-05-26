import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div>
        <div className="jumbotron" style ={{backgroundColor: "pink"}}>
            <h1>Contact</h1>
            <FontAwesomeIcon icon={faEnvelopeSquare} /> : jobs@spectac.se <br/>
            <FontAwesomeIcon icon={faMobileAlt} /> : + 46 722975912
        </div>

            <div className="container">
            <form id="contact-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
            </form>
            </div>
        </div>



    );
}

export default Contact ;
