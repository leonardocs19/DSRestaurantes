import React, { Component } from 'react';

import { Funcionarios } from '../api/funcionarios.js';

// Ver Modal


export default class Funcionario extends Component {

  deleteThisFuncionario() {
    if (confirm("Tem certeza que deseja excluir o funcionário selecionado?"))
      Funcionarios.remove(this.props.funcionario._id);
  }

  render() {

    return (
      <tr>
        <td>{this.props.funcionario.nome}</td>
        <td>{this.props.funcionario.idade}</td>
        <td>{this.props.funcionario.RG}</td>
        <td>{this.props.funcionario.CPF}</td>
        <td>{this.props.funcionario.Email}</td>
        <td>{this.props.funcionario.cargo}</td>
        <td>{this.props.funcionario.salario}</td>
        <td><button className="btn btn-danger btn-margin delete" onClick={this.deleteThisFuncionario.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button></td>
      </tr>
    );
  }
}