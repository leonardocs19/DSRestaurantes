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
            <li class="active"><a href="http://localhost:3000/item">Estoque</a></li>
            <li><a href="http://localhost:3000/financa">Financeiro</a></li>
            <li><a href="http://localhost:3000/funcionario">Funcionários</a></li>

          </ul>
        </div>
        </nav>

        <header>
          <h1><span className="glyphicon glyphicon-info-sign"></span> Ajuda - Gerenciador de Estoque</h1>
        </header>

        <div class="panel panel-info">
          <div class="panel-heading">Para cadastro de estoque:</div>
          <div class="panel-body"><p>Insira os dados correspondentes no campos específicos, para nome, quantidade, data da compra, data de vencimento e o estoque mínimo  </p>
          <p>Lembrado que nome, quantidade, data da compra, data de vencimento e o estoque mínimo são obrigatórios</p>
          <p>quantidade e estoque mínimo devem ser valores não negativos</p>
          <p>Nome deve conter pelo menos uma letra, a datas devem ser válidas </p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para adição de um item no estoque:</div>
          <div class="panel-body"><p>Coloque valores válidos para cada item separadamente e depois clique em adicionar</p>
          <p>Os itens vão para um "carrinho de compras", onde no poderão ainda ser editados</p>
          <p>Depois de verificar que tudo está correto, clique em confirmar para adicionar todas as mudanças</p>
          <p>Após a confirmação final, não mais será permitida a edição dos itens</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para visualização de estoque:</div>
          <div class="panel-body"><p>Os estoques cadastrados são visualizados logo abaixo da tela de cadastro</p></div>
        </div>

        <a className="btn btn-primary btn-md" href="http://localhost:3000/item" role="button">
            <span className="glyphicon glyphicon-circle-arrow-left"></span> Voltar</a>
      </div>
    )
  }
}