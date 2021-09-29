import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import bulkTea from '../data.js';

const renderListName = bulkTea.map((tea) =>
            <>
            <div className="col-5 col-md-5 bulk-tea-list-name">
                    {tea.name}
            </div>
            <div className="col-1 col-md-1 bulk-tea-list">
                    {tea.price.toFixed(2)}
            </div>
            </>
        )
    

function BulkTea() {
    return (
        <div className="custom-font">
            <Navbar/>
            <h3 className="text-center bulk-tea-title">Bulk Tea Pricing per ounce</h3>
            <div className="container">
                <div className="row">
                    {renderListName}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BulkTea;