import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import App from '../../ui/App.jsx';
import CrudPedido from '../../ui/CrudPedido.jsx';
import CrudFuncionario from '../../ui/CrudFuncionario.jsx';



const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/pedido" component={CrudPedido}/>
      <Route exact path="/funcionario" component={CrudFuncionario}/>
      <Route exact path="/item" component={CrudItem}/>
    </div>
  </Router>
);