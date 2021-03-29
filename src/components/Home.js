import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import imageHome from '../assets/laptop.jpg';

const Home = () => {

    return (

        <div className="container">
            <div className="row mt-3">
                <div className="col-sm-12
                col-md-8 offset-md-2
                  col-lg-6 offset-lg-0
                  order-lg-last
                  text-center">
                    <img id="personal-image" src={imageHome} alt="Personal" />
                </div>
                <div className="col-sm-12 text-center  col-lg-6">
                    <h1 id="title">I am Christos Georgakopoulos</h1>
                    <h2 id="subtitle">Junior front-end developer</h2>

                    <p className="text">
                        I love front-end development as my work is very close to the final user.
 You can learn more <Link to="/about"><b>about me</b></Link> or send me a message.
                </p>
                    <Form />

                </div>

            </div>
        </div>

    )
}

export default Home;
//Picture

//Words or me 

//send me a message button