import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';

import oil from '../assets/homepage/oil.jpg';
import herbs from '../assets/homepage/herbs.jpg';
import teawall from '../assets/homepage/tea-wall.jpg';
import soap from '../assets/homepage/soaps.jpg';
import jewelry from '../assets/homepage/jewelry_edited.jpg'
import HomePageCard from '../components/HomePageCard/HomePageCard';
import skateboards from '../assets/homepage/skateboards.jpg'

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        
        <div className="home-page">
            <Header/>
            <div className="album py-2">
                <div className="container">
                    <div className="row">

                        <HomePageCard 
                            altPhoto="Essential Oil Thumbnail"
                            shopBtn="Essential Oils"
                            photoSrc={oil}
                            pageLink="/oils"
                        />
                       
                        <HomePageCard 
                            altPhoto="Dry Herbs Thumbnail" 
                            shopBtn="Dry Herbs"
                            photoSrc={herbs}
                            pageLink="/herbs"
                        />

                        <HomePageCard
                            altPhoto="Bulk Tea Thumbnail" 
                            shopBtn="Bulk Tea"
                            photoSrc={teawall}
                            pageLink="/teas"
                        />

                    </div>
                    <div className="row second-row-cards">    

                        <HomePageCard
                            altPhoto="Hand Crafted Soaps Thumbnail" 
                            shopBtn="Hand Crafted Soaps"
                            photoSrc={soap}
                            pageLink="/soaps"
                        />

                        <HomePageCard
                            altPhoto="Jewelry Thumbnail" 
                            shopBtn="Jewelry"
                            photoSrc={jewelry}
                            pageLink="/jewelry"
                        />

                        <HomePageCard 
                        altPhoto="Skateboard and Accessories Thumbnail"
                        shopBtn="Skateboard Shop"
                        photoSrc={skateboards}
                        pageLink="/skateboard-shop"
                        />

                    </div>
                </div>                       
            </div>
            <Carousel/>
        </div>
    )
}

export default HomePage;
