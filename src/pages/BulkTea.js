import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { renderList } from '../helper.js';
import { bulkTea } from '../data.js';


function BulkTea() {
    return (
        <div className="custom-font">
            <Navbar/>
            <h3 className="text-center list-title">Bulk Tea Pricing per ounce</h3>
            <div className="container">
                    {renderList(bulkTea)}
            </div>
            <Footer/>
        </div>
    )
}

export default BulkTea;