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
        <header>
          <h1>Estoque</h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <input className="form-control" type="text" ref="textInput" placeholder="Nome"/>
            <input className="form-control" type="text" ref="textInput2" placeholder="Quantidade"/>
            <input className="form-control" type="text" ref="textInput3" placeholder="Data da compra"/>
            <input className="form-control" type="text" ref="textInput4" placeholder="Data do vencimento"/>
            <input className="form-control" type="text" ref="textInput5" placeholder="Estoque minimo"/>
            <input className="btn btn-primary btn-block" type="submit" value="Add" />
          </form>
          <h3>Todos os itens</h3>
          <ul className="list-group">
            {this.renderItens()}
          </ul>
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