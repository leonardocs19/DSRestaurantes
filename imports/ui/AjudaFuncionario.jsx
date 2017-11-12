import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1><span className="glyphicon glyphicon-info-sign"></span> Ajuda - Gerenciador de Funcionários</h1>
        </header>

        <div class="panel panel-info">
          <div class="panel-heading">Para cadastro de funcionários:</div>
          <div class="panel-body"><p>Insira os dados correspondentes no campos específicos, como nome, idade, cargo, salário, RG, CPF e E-Mail </p>
          <p>Lembrado que nome, idade, salário e CPF são obrigatórios</p>
          <p>Idade e salário devem ser valores não negativos, com a idade maior que 16 anos</p>
          <p>Nome deve conter pelo menos uma letra e o CPF deve ser válido</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para exclusão de funcionários:</div>
          <div class="panel-body"><p>Clique no botão X ao lado do nome do funcionário para realizar uma exclusão</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para visualização de funcionários:</div>
          <div class="panel-body"><p>Os funcionários cadastrados são visualizados logo abaixo da tela de cadastro</p></div>
        </div>

        <a className="btn btn-primary btn-md" href="http://localhost:3000/funcionario" role="button">Voltar</a>
      </div>
    )
  }
}