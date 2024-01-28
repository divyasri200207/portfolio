import React from 'react';
import { Element } from 'react-scroll';
import { IconButton }from "@material-ui/core";
import { LinkedIn,Instagram,GitHub} from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact__container">
            <p>
                Email : <span>dhivyashrii89@gmail.com</span>
            </p>
            <p>
                Github Username : <span>Divyasri1907</span>
            </p>
            <div className="contact__icons">
                <a href="https://www.linkedin.com/in/divyasri-c-5b0a00267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <IconButton>
                        <LinkedIn /> 
                    </IconButton>
                </a>
                <a href="www.instagram.com/divi____19">
                    <IconButton>
                        <Instagram /> 
                    </IconButton>
                </a>
                <a href="https://github.com/divyasri200207">
                    <IconButton>
                        <GitHub /> 
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  );
};

export default Contact;