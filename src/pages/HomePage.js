import React, { useEffect } from 'react';

import Header from '../components/Header/Header';
import Directory from '../components/directory/Directory';
import Carousel from '../components/Carousel/Carousel';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-page">
            <Header/>
            <Directory/>
            <Carousel/>
        </div>
    )
};

export default HomePage;