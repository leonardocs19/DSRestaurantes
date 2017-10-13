import React, { Component } from 'react';

import { Financas } from '../api/financas.js';


export default class Financa extends Component {

  deleteThisFinanca() {
    Financas.remove(this.props.financa._id);
  }

  render() {

    return (
      <li className="list-group-item">
        <b>{this.props.financa.nome}</b>
        <button className="btn btn-default btn-margin delete" onClick={this.deleteThisFinanca.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <br/>
        <p>Nome: {this.props.financa.nome} </p>
        <p>Valor: {this.props.financa.valor} </p>
        <p>Data: {this.props.financa.data} </p>
        <p>Tipo: {this.props.financa.tipo} </p>
      </li>
    );
  }
}