import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

import oil from '../assets/homepage/oil.jpg';
import herbs from '../assets/homepage/herbs.jpg';
import teawall from '../assets/homepage/tea-wall.jpg';
import soap from '../assets/homepage/soaps.jpg';
import jewelry from '../assets/homepage/jewelry_edited.jpg'
import HomePageCard from '../components/HomePageCard';

function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        
        <div className="home-page">
            <Navbar/>
            <Header/>
            <div className="album py-2 bg-light">
                <div className="container">

                    <div className="row">

                        {/* Oil Card */}
                        <HomePageCard 
                            altPhoto="Essential Oil Thumbnail Photo"
                            shopBtn="Essential Oils"
                            photoSrc={oil}
                            pageLink="/oils"
                        />
                        
                        {/* Dry Herbs Card */}
                        <HomePageCard 
                            altPhoto="Dry Herbs Thumbnail Photo" 
                            shopBtn="Dry Herbs"
                            photoSrc={herbs}
                            pageLink="/herbs"
                        />

                        {/* Bulk Tea Card */}
                        <HomePageCard
                            altPhoto="Bulk Tea Thumbnail Photo" 
                            shopBtn="Bulk Tea"
                            photoSrc={teawall}
                            pageLink="/teas"
                        />

                    </div>

                    <div className="row second-row-cards">    

                        {/* Hand Crafted Soaps Card */}
                        <HomePageCard
                            altPhoto="Hand Crafted Soaps Thumbnail Photo" 
                            shopBtn="Hand Crafted Soaps"
                            photoSrc={soap}
                            pageLink="/soaps"
                        />

                        {/* Jewelry Card */}
                        <HomePageCard
                            altPhoto="Jewelry Thumbnail Photo" 
                            shopBtn="Jewelry"
                            photoSrc={jewelry}
                            pageLink="/jewelry"
                        />

                    </div>
                </div>                       
            </div>
            <Carousel/>
            <Footer/>
        </div>
    )
}

export default HomePage;
