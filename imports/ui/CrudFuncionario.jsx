import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Funcionarios } from '../api/funcionarios.js';

import Funcionario from './Funcionario.jsx'

class CrudFuncionario extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      cpf: true,
      nome: true,
      salario: true,
      idade: true,
      aux: false
    };
  }

  testaCPF(strCPF) {
    var Soma;
    var Resto;
      Soma = 0;
    if (strCPF == "00000000000") return false;
      
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
    Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
    
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
      return true;
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
    const idade = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
    const cargo = ReactDOM.findDOMNode(this.refs.textInput3).value.trim();
    const salario = ReactDOM.findDOMNode(this.refs.textInput4).value.trim();
    const RG = ReactDOM.findDOMNode(this.refs.textInput5).value.trim();
    const CPF = ReactDOM.findDOMNode(this.refs.textInput6).value.trim();
    const Email = ReactDOM.findDOMNode(this.refs.textInput7).value.trim();

    if(nome.length > 0) 
      this.setState({nome: true});
    else
      this.setState({nome: false});

    if(parseInt(idade) >= 16) 
      this.setState({idade: true});
    else
      this.setState({idade: false});

    if(parseFloat(salario) >= 0)
      this.setState({salario: true});
    else
      this.setState({salario: false});

    if(this.testaCPF(CPF)){
      this.setState({cpf: true});
      this.setState({aux: true});
    }
    else{
      this.setState({cpf: false});
    }
    


    if(this.state.cpf && this.state.idade && this.state.nome && this.state.salario && this.state.aux) {

      Funcionarios.insert({
        nome,
        idade,
        cargo,
        salario,
        RG,
        CPF,
        Email,
      });


      ReactDOM.findDOMNode(this.refs.textInput).value = '';
      ReactDOM.findDOMNode(this.refs.textInput2).value = '';
      ReactDOM.findDOMNode(this.refs.textInput3).value = '';
      ReactDOM.findDOMNode(this.refs.textInput4).value = '';
      ReactDOM.findDOMNode(this.refs.textInput5).value = '';
      ReactDOM.findDOMNode(this.refs.textInput6).value = '';
      ReactDOM.findDOMNode(this.refs.textInput7).value = '';

      this.setState({aux: false});

    }
  }

  renderFuncionarios() {
    return this.props.funcionarios.map((funcionario) => (
      <Funcionario key={funcionario._id} funcionario={funcionario} />
    ));
  }

  render() {

    let displayErrorCpf = this.state.cpf ? ' ': this.renderErrorMsg("CPF") ;
    let displayErrorIdade = this.state.idade ? ' ': this.renderErrorMsg("Idade") ;
    let displayErrorNome = this.state.nome ? ' ': this.renderErrorMsg("Nome") ;
    let displayErrorSalario = this.state.salario ? ' ': this.renderErrorMsg("Salario") ;
    
    return (
      <div className="container-fluid">
        <header>
          <h1>Funcionário <a className="btn-lg btn-md btn btn-info" href="http://localhost:3000/funcionario/ajuda" role="button">Ajuda</a></h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <br/>
            <input className="form-control" type="text" ref="textInput" placeholder="Nome *"/>
            {displayErrorNome}
            <input className="form-control" type="number" ref="textInput2" placeholder="Idade *"/>
            {displayErrorIdade}
            <input className="form-control" type="text" ref="textInput3" placeholder="Cargo"/>
            <input className="form-control" type="text" ref="textInput4" placeholder="Salario *"/>
            {displayErrorSalario}
            <input className="form-control" type="text" ref="textInput5" placeholder="RG"/>
            <input className="form-control" type="text" ref="textInput6" placeholder="CPF *"/>
            {displayErrorCpf}
            <input className="form-control" type="email" ref="textInput7" placeholder="E-Mail"/>
            <input className="btn btn-primary btn-block" type="submit" value="Adicionar Funcionário" />
            <br/>
            <p>Os campos com ' * ' são obrigatórios</p>
          </form>
          <h3>Todos os funcionários</h3>
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