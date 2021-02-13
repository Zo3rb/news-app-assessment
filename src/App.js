import React, { Fragment } from 'react';

// Internal Import
import AppRouter from './AppRouter';
import { AppHeader, AppFooter } from './components';

const App = () => {
  return (
    <Fragment>
      <AppHeader />
      <AppRouter />
      <AppFooter />
    </Fragment>
  );
}

export default App;
