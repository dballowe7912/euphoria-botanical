import React, { useEffect } from 'react';

import Header from '../../components/header/header.component';
import Directory from '../../components/directory/directory.component';
import Carousel from '../../components/carousel/carousel.component';

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