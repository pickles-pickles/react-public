//A brief summary and resumé

import React from 'react';

const About = () => {

    return (
        <div className="container">

            <div className="row mt-3">
                <div className="col-lg-6 offset-lg-3
                col-md-8 offset-md-2
                text-center">
                    <img id="about-image"
                        src="assets/standing-pocket.jpg" alt="Me" />
                </div>
            </div>

            <div className="row text sth">

                <p>
                    I am Christos Georgakopoulos, 27 yo.
                    My Bsc is on Materials Science & Enginnering, University of Crete
                    Greek is my mother tongue and I have a Proficiency degree in English.
                </p>

            </div>
            <p className="text">During the pandemic I decided to study front-end development.
                     I attended webinars and built projects with emphasis in the following areas:</p>
            <div className="row text">
                <div className="col-6">
                    <ul>
                        <li>SEO</li>
                        <li>HTML</li>
                        <li>CSS(SCSS &LESS)</li>
                        <li>WordPress</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Bootstrap 4</li>
                        <li>git</li>
                    </ul>
                </div>

            </div>

        </div>

    )
}

export default About;