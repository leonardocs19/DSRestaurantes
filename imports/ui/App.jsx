import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
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