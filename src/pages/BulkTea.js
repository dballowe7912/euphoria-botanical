import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import { renderList } from '../helper.js';
import { bulkTea } from '../data.js';


const BulkTea = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bulk-tea-page custom-font">
            <Navbar/>
            <h3 className="text-center list-title" >Bulk Tea</h3>
            <h5 className="text-center border-bottom">pricing per ounce</h5>
            <div className="container">
                    {renderList(bulkTea)}
            </div>
            <Footer/>
        </div>
    )
}

export default BulkTea;