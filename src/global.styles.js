import  {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Charm&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=McLaren&family=Source+Sans+Pro&display=swap');

    /* font-family: 'McLaren', cursive;
    font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Charm', cursive; */

    @media screen and (max-width: 800px) {
        padding: 10px;
    }   

    a {
    text-decoration: none;
    color: black;
    }

    .custom-font {
    font-family: 'McLaren', cursive;
    }

    /* Home Page */
    

    /* Dry Herbs Page */

    .dry-herbs-page {

        .page-title {
            padding-top: 1em;
            max-height: 10px;
            margin: auto;
        }

        .dry-herbs-album-container {

            font-size: 0.8em;

            @media screen and (max-width: 1200px) {
                font-size: 0.6em;
            }   
            
        }

    }

    /* Bulk Teas Page */

    .bulk-tea-page {

        .list-title {
            padding-bottom: 0;
            margin-bottom: 0;
        }
        
        h5 {
            padding-bottom: 1em;
        }

        div.container {
            margin-top: 1em;
        }

    }

    /* Essential Oils Page */

    .essential-oils-page {

        h3 {
            padding-bottom: 1em;
        }

        .container {
            padding-top: 1em;
        }

    }

    /* Soaps Page */

    .soaps-page {

        h3 {
            padding-bottom: 1em;
        }

        .container {
            padding-top: 1em;
        }

    }

    /* Jewelery Page */

    .jewelry-page {
    
        h3 {
            padding-bottom: 1em;
        }

        .container {
            padding-top: 1em;
        }

    }

    /* Body and Room Sprays Page */

    .sprays-page {

        h3 {
            padding-bottom: 1em;
        }

        .container {
            padding-top: 1em;
        }
    
    }

    /* Crystal and Stones Page */

    .crystals-and-stones-page {

        h3 {
            padding-bottom: 1em;
        }

        .container {
            padding-top: 1em;
        }
    
    }

    /* Skateboards and Accessories */

    .skate-shop-page {

        h3 {
            padding-bottom: 1em;
        }

        .container {
            padding-top: 1em;
        }
    
    }

    /* Contact Page */

    .contact-page {

        .contact-title {
            margin: 1em 0;
        }

    }

    /* About Page */

    .about-main-container {
        display: flex;
        flex-direction: column;
    }

    .about-title {
        text-align: center;
        padding: 1em 0 1em 0;
    }

    .about-text {
        width: 100%;
        font-size: 1.2em;
        line-height: 2em;
    }

    /* List Helper Fuction CSS */


    .list-title {
        margin: 0.5em 0;
    }

    .list-name {
        line-height: 2em;
    }

    .list-price {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    /* { color: #737838; } */
    /* { color: #F8FFAB; } */
    .primary { color: #BDC470; }
    /* { color: #562C78; } */
    .secondary { color: #9F70C4; }
`;