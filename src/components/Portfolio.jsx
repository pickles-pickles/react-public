import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => {

    return(
<div className="container">
    <h1>Portfolio</h1>

<p>
    I am currently building my portfolio and it grows bigger day by day.
    It consists mainly of React apps I deployed to Netlify.
</p>
<p>Some apps include:</p>
<p className="text"> <Link to="https://e-magazi.netlify.app/cart">A demo e-shop</Link></p>
<p className="text"><Link to="https://o-kairos-simera.netlify.app/">A Weather app connected to an API</Link></p>
<p className="text"><Link to="https://to-do-app-3000.netlify.app/">A simple to-do list app </Link></p>
<p className="text"><Link to="https://pickles-pickles.github.io/">A funny gh-pages site </Link></p>
</div>
    )
}

export default Portfolio;