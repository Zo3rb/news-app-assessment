import React from 'react';

// External Imports 
import { IoMdFootball } from 'react-icons/io';

const AppFooter = () => {

    // Creating CSS Object for Fixed Footer => JSS(JS in CSS).
    const footerStyle = {
        width: "100%",
        paddingTop: "15px",
        backgroundColor: "#232960",
        color: "#FFF",
    };

    return (
        <div style={footerStyle} className="app-footer">
            <div className="container">
                <p className="text-center mb-0"><IoMdFootball size="3em" /></p>
                <h3 className="text-center mb-3">SportsLive</h3>
                <hr style={{ backgroundColor: "#fff" }} />
                <div className="row">
                    <div className="col-sm-12 col-md-6 text-sm-center text-md-left">
                        <p>&copy; Copyrights SportsLive 2020. All Rights Reserved.</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <ul className="list-unstyled">
                            <li className="d-md-inline-block d-sm-block m-md-2">Careers</li>
                            <li className="d-md-inline-block d-sm-block m-md-2">Contact US</li>
                            <li className="d-md-inline-block d-sm-block m-md-2">Privacy Policy</li>
                            <li className="d-md-inline-block d-sm-block m-md-2">Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFooter;
