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
        <p>Nome: {this.props.funcionario.nome} </p>
        <p>Idade: {this.props.funcionario.idade} </p>
        <p>RG: {this.props.funcionario.RG} </p>
        <p>CPF: {this.props.funcionario.CPF} </p>
        <p>Cargo: {this.props.funcionario.cargo} </p>
        <p>Salário: {this.props.funcionario.salario} </p>
      </li>
    );
  }
}