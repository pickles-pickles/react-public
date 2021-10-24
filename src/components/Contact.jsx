import React from 'react';
import Form from './Form';

const Contact = () => {


    return (
        <div className="container">
            <p className="text">
                Feel free to contact me in the way that suits you.
                Either visit my social media profiles, send me an e-mail or write in the textarea below.
                This site is connected to a Realtime Firebase.
    </p>

            <div className="row align-items-center
                     justify-content-center m-1 ">
                <div className="icon">
                    <span className="fa fa-github fa-lg"></span>
                </div>
                <div className="icon">
                    <span className="fa fa-linkedin fa-lg"></span>
                </div>
                <div className="icon">
                    <span className="fas fa-envelope fa-lg"></span>
                </div>
            </div>

            <Form />
        </div>
    )
}

export default Contact;