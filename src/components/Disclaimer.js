import React, { useState } from 'react';

function Disclaimer() {

    const [ showModal, setShowModal ] = useState(true);

    // const reload=()=>window.location.reload();
    

    const handleClick = () => {
        setShowModal(false)
    }

    return (
        <div className={`modal fade d-block ${ showModal ? 'show' : ''}`} id="disclaimer-modal-container" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-lg modal-dialog-scrollable" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="disclaimer-title">Please Read</h5>
                </div>
                <div className="modal-body">
                    Euphoria Botanical LLC are not medical professionals. The products available, along with statements,
                    opinions, views expressed, ideas, or suggestions are our opinions, and are meant for informational 
                    purposes only! They are not meant to be used to diagnose, treat, prescribe, prevent or cure a disease 
                    or to administer in any manner to any physical ailments and are not intended for the substitute for 
                    the medical advise of a trained healthcare professional. We cannot be held liable for the decisions 
                    and choices you make and or the outcome of those decisions and choices.

                    You are encouraged to do your own research and consult your health care professional before treating 
                    yourself or anyone else.

                    Herbs are immensely powerful and if they are misused, can be harmful.

                    Herbs can also cause allergic reactions, interfere with traditional medications, by blocking their 
                    effectiveness, or reacting with them in a harmful way.

                    Always check with your healthcare provider before using herbs, or herbal products.

                    Do not use herbal products if you are pregnant, nursing, taking medications or undergoing treatment
                    for medical conditions with out consulting your healthcare professional.
                </div>
                <div className="modal-footer">
                    <button onClick={handleClick} type="button" className="btn btn-secondary" data-dismiss="modal">I Agree</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer


// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
//   Launch demo modal
// </button>