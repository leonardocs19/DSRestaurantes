import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">

      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="http://localhost:3000">DS Restaurantes</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="http://localhost:3000">Home</a></li>
            <li><a href="http://localhost:3000/item">Estoque</a></li>
            <li><a href="http://localhost:3000/financa">Financeiro</a></li>
            <li><a href="http://localhost:3000/funcionario">Funcionários</a></li>

          </ul>
        </div>
        </nav>


        <header>
          <h1>Menu Principal - DS Restaurantes</h1>
        </header>
        <a className="btn-lg btn-block btn btn-default" href="http://localhost:3000/pedido" role="button">Novo Pedido</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Ver Mesas</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Fila de Pedidos</a>
        <br/>
        <a className="btn-lg btn-block btn btn-default" href="http://localhost:3000/item" role="button">Acessar Gerenciador de Estoque</a>
        <br/>
        <a className="btn-lg btn-block btn btn-default" href="http://localhost:3000/financa" role="button">Acessar Gerenciador de Finanças</a>
        <br/>
        <a className="btn-lg btn-block btn btn-default" href="http://localhost:3000/funcionario" role="button">Acessar Gerenciador de Funcionários</a>
      </div>
    )
  }
}