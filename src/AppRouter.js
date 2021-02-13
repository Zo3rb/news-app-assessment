import React from 'react';

// External Imports 
import { Switch, Route } from 'react-router-dom';

// Internal Imports
import { HomePage, Page404, AllNewsPage, SingleNewPage } from './pages';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/news" component={AllNewsPage} />
            <Route exact path="/news/:id" component={SingleNewPage} />
            <Route component={Page404} />
        </Switch>
    );
}

export default AppRouter;
