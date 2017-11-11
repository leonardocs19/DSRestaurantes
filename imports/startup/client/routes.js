import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import App from '../../ui/App.jsx';
import CrudPedido from '../../ui/CrudPedido.jsx';
import CrudFuncionario from '../../ui/CrudFuncionario.jsx';
import CrudItem from '../../ui/CrudItem.jsx';
import CrudFinanca from '../../ui/CrudFinanca.jsx';
import AjudaFuncionario from '../../ui/AjudaFuncionario.jsx';


const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/pedido" component={CrudPedido}/>
      <Route exact path="/funcionario" component={CrudFuncionario}/>
      <Route exact path="/item" component={CrudItem}/>
      <Route exact path="/financa" component={CrudFinanca}/>
      <Route exact path="/funcionario/ajuda" component={AjudaFuncionario}/>
    </div>
  </Router>
);