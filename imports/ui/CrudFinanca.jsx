import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Financas } from '../api/financas.js';

import Financa from './Financa.jsx'

class CrudFinanca extends Component {
 

  handleSubmit(event) {
    event.preventDefault();

    const nome = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const valor = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
    const data = ReactDOM.findDOMNode(this.refs.textInput3).value.trim();
    const tipo = ReactDOM.findDOMNode(this.refs.textInput4).value.trim();

    console.log(nome);
    Financas.insert({
      nome,
      valor,
      data,
      tipo,
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.textInput2).value = '';
    ReactDOM.findDOMNode(this.refs.textInput3).value = '';
    ReactDOM.findDOMNode(this.refs.textInput4).value = '';
  }

  renderFinancas() {
    return this.props.financas.map((financa) => (
      <Financa key={financa._id} financa={financa} />
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Finanças</h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <input className="form-control" type="text" ref="textInput" placeholder="Nome"/>
            <input className="form-control" type="text" ref="textInput2" placeholder="Valor"/>
            <input className="form-control" type="text" ref="textInput3" placeholder="Data"/>
            <input className="form-control" type="text" ref="textInput4" placeholder="Tipo (Receita ou Despesa)"/>
            <input className="btn btn-primary btn-block" type="submit" value="Add" />
          </form>
          <h3>Todos as Finanças</h3>
          <ul className="list-group">
            {this.renderFinancas()}
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
    financas: Financas.find({}).fetch(),
  };
}, CrudFinanca);