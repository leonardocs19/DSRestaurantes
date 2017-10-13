import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Daran Serveur</h1>
        </header>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Novo Pedido</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Ver Mesas</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Fila de Pedidos</a>
        <br/>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Criar Item</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Editar Item</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Visualizar Item</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Excluir Item</a>
        <br/>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Criar Receita - Despesa</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Editar Receita - Despesa</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Visualizar Receita - Despesa</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Excluir Receita - Despesa</a>
        <br/>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Criar Funcionário</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Editar Funcionário</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Visulizar Funcionário</a>
        <a className="btn-lg btn-block btn btn-default" href="" role="button">Excluir Funcionário</a>
      </div>
    )
  }
}