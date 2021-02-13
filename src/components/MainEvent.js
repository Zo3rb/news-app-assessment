import React from 'react';

// Internal Imports
import '../assets/main.css';

const MainEvent = () => {

    // This Component Represents The Main event
    // This Component Will be Changed Daily through The Admin Dashboard -- Static For Now

    return (
        <div className="main-wrapper">
            <div className="main-middle">
                <div className="main-details">
                    <h1>The Event Name/Title</h1>
                    <p>The Event Subtitle</p>
                </div>
            </div>
        </div>
    );
}

export default MainEvent;
