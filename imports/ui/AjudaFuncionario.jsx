import React, { Component } from 'react';

export default class App extends Component {
  render() {
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
            <li><a href="http://localhost:3000/financa">Financeiro</a></li>
            <li class="active"><a href="http://localhost:3000/funcionario">Funcionários</a></li>

          </ul>
        </div>
        </nav>

        <header>
          <h1><span className="glyphicon glyphicon-info-sign"></span> Ajuda - Gerenciador de Funcionários</h1>
        </header>

        <div class="panel panel-info">
          <div class="panel-heading">Para cadastro de funcionários:</div>
          <div class="panel-body"><p>Insira os dados correspondentes no campos específicos, como nome, idade, cargo, salário, RG, CPF e E-Mail </p>
          <p>Lembrado que nome, idade, salário e CPF são obrigatórios</p>
          <p>Idade e salário devem ser valores não negativos, com a idade maior que 16 anos e menor que 100 anos e salário de 0 até 10 mil</p>
          <p>Nome deve conter pelo menos uma letra e o CPF deve ser válido</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para exclusão de funcionários:</div>
          <div class="panel-body"><p>Clique no botão <span className="glyphicon glyphicon-remove"></span> ao lado do nome do funcionário para realizar uma exclusão e confirme na tela seguinte</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para visualização de funcionários:</div>
          <div class="panel-body"><p>Os funcionários cadastrados são visualizados logo abaixo da tela de cadastro</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para visualização do relatório de funcionário:</div>
          <div class="panel-body"><p>Clique no botão <span className="glyphicon glyphicon-list-alt"></span> para ver o relátório de funcionários</p></div>
        </div>

        <a className="btn btn-primary btn-md" href="http://localhost:3000/funcionario" role="button">
          <span className="glyphicon glyphicon-circle-arrow-left"></span> Voltar</a>
      </div>
    )
  }
}