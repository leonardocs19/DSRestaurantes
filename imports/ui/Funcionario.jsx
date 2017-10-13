import React, { Component } from 'react';

import { Funcionarios } from '../api/funcionarios.js';


export default class Funcionario extends Component {

  deleteThisFuncionario() {
    Funcionarios.remove(this.props.funcionario._id);
  }

  render() {

    return (
      <li className="list-group-item">
        <b>{this.props.funcionario.nome}</b>
        <button className="btn btn-default btn-margin delete" onClick={this.deleteThisFuncionario.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <br/>
        <p> {this.props.funcionario.nome} </p>
        <em>R$ {this.props.funcionario.cargo} </em>
      </li>
    );
  }
}