import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Financas } from '../api/financas.js';

import Financa from './Financa.jsx'

class CrudFinanca extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: true,
      nome: true,
      data: true,
      tipo: true,
      aux: false
    };
  }

  renderErrorMsg(error) {
    return(
      <div className="alert alert-danger fade in">
        <strong>Erro </strong> {error} Inválido!
      </div>
    )
  }
 

  handleSubmit(event) {
    event.preventDefault();

    const nome = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const valor = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
    const data = ReactDOM.findDOMNode(this.refs.textInput3).value.trim();
    const tipo = ReactDOM.findDOMNode(this.refs.textInput4).value.trim();

    if(nome.length > 0) 
      this.setState({nome: true});
    else
      this.setState({nome: false});

    if(parseFloat(valor) > 0) 
      this.setState({valor: true});
    else
      this.setState({valor: false});

    if(data > 0) 
      this.setState({data: true});
    else
      this.setState({data: false});

    if(tipo.length > 0) {
      this.setState({tipo: true});
      this.setState({aux: true});
    }
    else
      this.setState({tipo: false});

  if(this.state.data && this.state.valor && this.state.nome && this.state.tipo && this.state.aux) {

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

      this.setState({aux: false});

    }
  }

  renderFinancas() {
    return this.props.financas.map((financa) => (
      <Financa key={financa._id} financa={financa} />
    ));
  }

  render() {

    let displayErrorTipo = this.state.tipo ? ' ': this.renderErrorMsg("Despesa") ;
    let displayErrorValor = this.state.valor ? ' ': this.renderErrorMsg("Valor") ;
    let displayErrorNome = this.state.nome ? ' ': this.renderErrorMsg("Nome") ;
    let displayErrorData = this.state.data ? ' ': this.renderErrorMsg("Data") ;

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
            <li class="active"><a href="http://localhost:3000/financa">Financeiro</a></li>
            <li><a href="http://localhost:3000/funcionario">Funcionários</a></li>

          </ul>
        </div>
        </nav>

        <header>
          <h1>Finanças - Cadastro de Despesas</h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <input className="form-control" type="text" ref="textInput" placeholder="Nome"/>
            {displayErrorNome}
            <input className="form-control" type="number" ref="textInput2" placeholder="Valor"/>
            {displayErrorValor}
            <input className="form-control" type="date" ref="textInput3" placeholder="Data"/>
            {displayErrorData}
            <input className="form-control" type="text" ref="textInput4" placeholder="Despesa"/>
            {displayErrorTipo}
            <input className="btn btn-primary btn-block" type="submit" value="Adicionar Finança" />
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