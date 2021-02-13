import React, { Fragment } from 'react';

// Internal Imports
import { MainEvent, HomeNewsList } from '../components';

const HomePage = () => {
    return (
        <Fragment>
            <div className="container" style={{ padding: "50px 0" }}>
                <MainEvent />
            </div>
            <div className="container">
                <HomeNewsList />
            </div>
        </Fragment>
    );
}

export default HomePage;
