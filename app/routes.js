/* Node Modules */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Components */
import App from 'App';
import HomePanel from 'HomePanel';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePanel} />
    <Route path="/home" component={HomePanel} />
  </Route>
);
