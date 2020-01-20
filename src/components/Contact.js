import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className="jumbotron">
            <FontAwesomeIcon icon={faEnvelopeSquare} /> : jobs@spectac.se <br/>
            <FontAwesomeIcon icon={faMobileAlt} /> : + 46 722975912
        </div>


    );
}

export default Contact ;
