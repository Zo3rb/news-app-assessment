import React from 'react';

// External Imports 
import { Switch, Route } from 'react-router-dom';

// Internal Imports
import { HomePage, AboutPage } from './pages';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    );
}

export default AppRouter;
