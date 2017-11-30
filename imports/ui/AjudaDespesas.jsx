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
          <h1><span className="glyphicon glyphicon-info-sign"></span> Ajuda - Gerenciador de Despesas</h1>
        </header>

        <div class="panel panel-info">
          <div class="panel-heading">Para cadastro de despesas:</div>
          <div class="panel-body"><p>Insira os dados correspondentes no campos específicos, como nome atribuido a despesa, valor, data que consta na nota fiscal, e o numero da nota fiscal correspondente. </p>
          <p>Lembrando que todos os campos são obrigatórios</p>
          <p>O valor deve ser um valor positivo, e o nome deve conter pelo menos uma letra.</p>
          </div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para exclusão de despesas:</div>
          <div class="panel-body"><p>Clique no botão <span className="glyphicon glyphicon-remove"></span> ao lado do nome da despesa desejada para realizar uma exclusão e confirme a ação na tela seguinte</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para visualização de despesas registradas:</div>
          <div class="panel-body"><p>As ultimas despesas cadastradas são visualizadas logo abaixo da tela de cadastro</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para visualização do relatório comnpleto de despesas:</div>
          <div class="panel-body"><p>Clique no botão <span className="glyphicon glyphicon-list-alt"></span> para ver o relátório completo das despesas registradas</p></div>
        </div>

        <a className="btn btn-primary btn-md" href="http://localhost:3000/financa" role="button">
          <span className="glyphicon glyphicon-circle-arrow-left"></span> Voltar</a>
      </div>
    )
  }
}