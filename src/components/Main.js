import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Main = () => {

    return (

        <div>
            <Router>
                <NavigationBar />
                <Footer />
            </Router>
        </div>

    )
}

export default Main;