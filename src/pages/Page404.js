import React from 'react';

// External Imports
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="container py-3">
            <div className="row py-5 text-center">
                <div className="col">
                    <h1 className="mt-5 mb-0" style={{ fontSize: "10rem", color: "#4752b5" }}>404</h1>
                    <p className="font-weight-bold" style={{ color: "#4752b5" }}>Page Not Found</p>
                    <p className="mt-5">Return <Link to="/">Home</Link> Now</p>
                </div>
            </div>
        </div>
    );
}

export default Page404;
