import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Funcionarios } from '../api/funcionarios.js';

import Funcionario from './Funcionario.jsx'

class RelatorioFuncionario extends Component {
 


  renderFuncionarios() {
    return this.props.funcionarios.map((funcionario) => (
      <Funcionario key={funcionario._id} funcionario={funcionario} />
    ));
  }

  imprimir() {
    window.print();
  }

  render() {

    
    return (
      <div className="container-fluid">
        <header>
          <h1>Relatório Funcionários </h1>
        </header>
        <div className="form-group">
          <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>RG</th>
              <th>CPF</th>
              <th>E-Mail</th>
              <th>Cargo</th>
              <th>Salário R$</th>
            </tr>
          </thead>
          <tbody>
            {this.renderFuncionarios()}
          </tbody>
          </table>
      
        </div>
        <a className="btn-lg btn-md btn btn-primary" href="http://localhost:3000/funcionario" role="button">
            <span className="glyphicon glyphicon-circle-arrow-left"></span> Voltar</a>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    funcionarios: Funcionarios.find({}).fetch(),
  };
}, RelatorioFuncionario);