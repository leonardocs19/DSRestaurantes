import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import App from '../../ui/App.jsx';
import CrudPedido from '../../ui/CrudPedido.jsx';


const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/pedido" component={CrudPedido}/>
    </div>
  </Router>
);