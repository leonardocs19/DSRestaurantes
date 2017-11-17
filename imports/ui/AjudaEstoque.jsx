import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
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

        <a className="btn btn-primary btn-md" href="http://localhost:3000/estoque" role="button">Voltar</a>
      </div>
    )
  }
}