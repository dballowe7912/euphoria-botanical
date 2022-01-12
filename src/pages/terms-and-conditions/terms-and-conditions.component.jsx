import React, { useEffect } from 'react';
import './terms-and-conditions.styles.scss';

function TermsAndConditions() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='terms-conditions'>
            <h1>Terms and Conditions</h1>
            <p>By accessing euphoriabotanical.com, you are agreeing to be bound by these 
                Terms and Conditions of use, all applicable laws and regulations, and 
                agree that you are responsible for compliance with any applicable local 
                laws. If you do not agree with any of these terms, you are prohibited from 
                using or accessing euphoriabotanical.com. The materials contained in this 
                web site are protected by applicable copyright and trade mark law.
            </p>
            <h1>Returns and Refunds</h1>
            <p className='returns-refunds'>
                In order to be eligible for a return, items must have been 
                either damaged in shipment or the wrong item was shipped. 
                Claims must to be submitted within 48 hours of receiving, and 
                if the wrong item was shipped, a photo of the item needs to be sent 
                within 48 hours upon receiving. If either condition is met, item 
                will be replaced, or a refund will be issued.
            </p>
            <h1>Shipping</h1>
            <p className='shipping'>
                Shipping rates carry a flat fee of $10. For oversized items such as 
                skateboards or bulk orders can carry a fee of $20. Orders that are shipped 
                out of county will vary, so an estimate will need to be arranged. For more 
                information email <span><a href="mailto:support@euphoriabotanical.com">support@euphoriabotanical.com</a></span>.
            </p>
        </div>
    )
}

export default TermsAndConditions
