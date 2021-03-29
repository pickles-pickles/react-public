import React from 'react';

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <div className="row text-left ml-1">
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
                    </div>
                    <div className="col text-right mr-1">
                        <p>Made by Christos Georgakopoulos, 2021</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;