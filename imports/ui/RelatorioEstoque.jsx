import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Itens } from '../api/itens.js';

import Item from './Item.jsx'

class RelatorioEstoque extends Component {
 


  renderItens() {
    return this.props.itens.map((item) => (
      <Item key={item._id} item={item} />
    ));
  }

  imprimir() {
    window.print();
  }

  render() {

    
    return (
      <div className="container-fluid">
        
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="http://localhost:3000">DS Restaurantes</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="http://localhost:3000">Home</a></li>
            <li><a href="http://localhost:3000/item">Estoque</a></li>
            <li><a href="http://localhost:3000/financa">Financeiro</a></li>
            <li class="active"><a href="http://localhost:3000/funcionario">Funcionários</a></li>

          </ul>
        </div>
        </nav>

        <header>
          <h1>Relatório Itens <button className="btn btn-default btn-margin delete" onClick={this.imprimir}><span className="glyphicon glyphicon-print"></span> Imprimir
        </button></h1>
        </header>
        <div className="form-group">
          <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Data da compra</th>
              <th>Data de vencimento</th>
              <th>Estoque mínimo</th>
              </tr>
          </thead>
          <tbody>
            {this.renderItens()}
          </tbody>
          </table>
      
        </div>
        <a className="btn-lg btn-md btn btn-primary" href="http://localhost:3000/item" role="button">
            <span className="glyphicon glyphicon-circle-arrow-left"></span> Voltar</a>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    itens: Itens.find({}).fetch(),
  };
}, RelatorioEstoque);