import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Itens } from '../api/itens.js';

import Item from './Item.jsx'

class CrudItem extends Component {
 

  handleSubmit(event) {
    event.preventDefault();

    const nome = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const quantidade = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
    const dataCompra = ReactDOM.findDOMNode(this.refs.textInput3).value.trim();
    const dataVencimento = ReactDOM.findDOMNode(this.refs.textInput4).value.trim();
    const estoqueMinimo = ReactDOM.findDOMNode(this.refs.textInput5).value.trim();
    

    console.log(nome);
    Itens.insert({
      nome,
      quantidade,
      dataCompra,
      dataVencimento,
      estoqueMinimo,
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.textInput2).value = '';
    ReactDOM.findDOMNode(this.refs.textInput3).value = '';
    ReactDOM.findDOMNode(this.refs.textInput4).value = '';
    ReactDOM.findDOMNode(this.refs.textInput5).value = '';
    ReactDOM.findDOMNode(this.refs.textInput6).value = '';

  }

  renderItens() {
    return this.props.itens.map((item) => (
      <Item key={item._id} item={item} />
    ));
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
            <li class="active"><a href="http://localhost:3000/item">Estoque</a></li>
            <li><a href="http://localhost:3000/financa">Financeiro</a></li>
            <li><a href="http://localhost:3000/funcionario">Funcionários</a></li>

          </ul>
        </div>
        </nav>

        <header>
          <h1>Estoque <a className="btn-lg btn-md btn btn-info" href="http://localhost:3000/item/ajuda" role="button">
            <span className="glyphicon glyphicon-info-sign"></span> Ajuda</a></h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <input className="form-control" type="text" ref="textInput" placeholder="Nome"/>
            <input className="form-control" type="text" ref="textInput2" placeholder="Quantidade"/>
            <input className="form-control" type="date" ref="textInput3" placeholder="Data da compra - DD/MM/AAAA"/>
            <input className="form-control" type="date" ref="textInput4" placeholder="Data do vencimento"/>
            <input className="form-control" type="text" ref="textInput5" placeholder="Estoque minimo"/>
            <input className="btn btn-primary btn-block" type="submit" value="Adicionar Item ao Estoque" />
          </form>
          <h3>Todos os itens</h3>
         <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Data daCompra</th>
              <th>Data do Vencimento</th>
              <th>Estoque Minimo</th>
              </tr>
          </thead>
          <tbody>
            {this.renderItens()}
          </tbody>
          </table>
        </div>
        <div className="navbar navbar-fixed-bottom">
          <button className="btn btn-success btn-block btn-lg" onClick={this.handleSubmit}>Finalizar</button>
          <a className="btn btn-danger btn-block" href="http://localhost:3000/" role="button">Cancelar</a>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    itens: Itens.find({}).fetch(),
  };
}, CrudItem);