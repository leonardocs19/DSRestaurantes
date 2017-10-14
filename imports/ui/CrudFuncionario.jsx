import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Funcionarios } from '../api/funcionarios.js';

import Funcionario from './Funcionario.jsx'

class CrudFuncionario extends Component {
 

  handleSubmit(event) {
    event.preventDefault();

    const nome = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const idade = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
    const cargo = ReactDOM.findDOMNode(this.refs.textInput3).value.trim();
    const salario = ReactDOM.findDOMNode(this.refs.textInput4).value.trim();
    const RG = ReactDOM.findDOMNode(this.refs.textInput5).value.trim();
    const CPF = ReactDOM.findDOMNode(this.refs.textInput6).value.trim();


    console.log(nome);
    Funcionarios.insert({
      nome,
      idade,
      cargo,
      salario,
      RG,
      CPF,
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.textInput2).value = '';
    ReactDOM.findDOMNode(this.refs.textInput3).value = '';
    ReactDOM.findDOMNode(this.refs.textInput4).value = '';
    ReactDOM.findDOMNode(this.refs.textInput5).value = '';
    ReactDOM.findDOMNode(this.refs.textInput6).value = '';

  }

  renderFuncionarios() {
    return this.props.funcionarios.map((funcionario) => (
      <Funcionario key={funcionario._id} funcionario={funcionario} />
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Funcionario</h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <input className="form-control" type="text" ref="textInput" placeholder="Nome"/>
            <input className="form-control" type="text" ref="textInput2" placeholder="Idade"/>
            <input className="form-control" type="text" ref="textInput3" placeholder="Cargo"/>
            <input className="form-control" type="text" ref="textInput4" placeholder="Salario"/>
            <input className="form-control" type="text" ref="textInput5" placeholder="RG"/>
            <input className="form-control" type="text" ref="textInput6" placeholder="CPF"/>
            <input className="btn btn-primary btn-block" type="submit" value="Adicionar Funcionário" />
          </form>
          <h3>Todos os funcionarios</h3>
          <ul className="list-group">
            {this.renderFuncionarios()}
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
    funcionarios: Funcionarios.find({}).fetch(),
  };
}, CrudFuncionario);