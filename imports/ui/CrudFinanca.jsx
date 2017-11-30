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
      NFe: true,
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
    const NFe = ReactDOM.findDOMNode(this.refs.textInput4).value.trim();

    if(nome.length > 0) 
      this.setState({nome: true});
    else
      this.setState({nome: false});

    if(parseFloat(valor) > 0) 
      this.setState({valor: true});
    else
      this.setState({valor: false});

    /*if(data > 0) 
      this.setState({data: true});
    else
      this.setState({data: false});*/

    if(NFe.length != 44) {
      this.setState({NFe: true});
      this.setState({aux: true});
    }
    else {
      this.setState({NFe: false});
    }

    if(this.state.data && this.state.valor && this.state.nome && this.state.NFe && this.state.aux) {

      Financas.insert({
        nome,
        valor,
        data,
        NFe,
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

    let displayErrorNFe = this.state.NFe ? ' ': this.renderErrorMsg("Número de nota fiscal") ;
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
          <h1>Finanças - Cadastro de Despesas <a className="btn-lg btn-md btn btn-info" href="http://localhost:3000/financa/ajuda" role="button">
            <span className="glyphicon glyphicon-info-sign"></span> Ajuda</a></h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <br/>
            <input className="form-control" type="text" ref="textInput" placeholder="Nome *"/>
            {displayErrorNome}
            <input className="form-control" type="number" ref="textInput2" placeholder="Valor *"/>
            {displayErrorValor}
            <input className="form-control" type="date" ref="textInput3" placeholder="Data *"/>
            {displayErrorData}
            <input className="form-control" type="text" ref="textInput4" placeholder="00000000000000000000000000000000000000000000 (44 digítos) *"/>
            {displayErrorNFe}
            <input className="btn btn-primary btn-block" type="submit" value="Adicionar Despesa" />
            <br/>
            <p>Os campos com ' * ' são obrigatórios</p>
          </form>
          <h3>Todos as Despesas <a className="btn-lg btn-md btn btn-primary" href="http://localhost:3000/financa/relatorio" role="button">
            <span className="glyphicon glyphicon-list-alt"></span> Relatório</a> </h3>
          <table class="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Nº Nota Fiscal</th>
              </tr>
            </thead>
            <tbody>
              {this.renderFinancas()}
            </tbody>
          </table>
          
        </div>
        <a className="btn-lg btn-md btn btn-primary" href="http://localhost:3000/" role="button">
            <span className="glyphicon glyphicon-circle-arrow-left"></span> Voltar</a>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    financas: Financas.find({}).fetch(),
  };
}, CrudFinanca);