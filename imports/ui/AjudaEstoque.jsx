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
          <div class="panel-body"><p>Insira os dados correspondentes no campos espec�ficos, para nome, quantidade, data da compra, data de vencimento e o estoque m�nimo  </p>
          <p>Lembrado que nome, quantidade, data da compra, data de vencimento e o estoque m�nimo s�o obrigat�rios</p>
          <p>quantidade e estoque m�nimo devem ser valores n�o negativos</p>
          <p>Nome deve conter pelo menos uma letra, a datas devem ser v�lidas </p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para adi��o de um item no estoque:</div>
          <div class="panel-body"><p>Coloque valores v�lidos para cada item separadamente e depois clique em adicionar</p>
          <p>Os itens v�o para um "carrinho de compras", onde no poder�o ainda ser editados</p>
          <p>Depois de verificar que tudo est� correto, clique em confirmar para adicionar todas as mudan�as</p>
          <p>Ap�s a confirma��o final, n�o mais ser� permitida a edi��o dos itens</p></div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">Para visualiza��o de estoque:</div>
          <div class="panel-body"><p>Os estoques cadastrados s�o visualizados logo abaixo da tela de cadastro</p></div>
        </div>

        <a className="btn btn-primary btn-md" href="http://localhost:3000/estoque" role="button">Voltar</a>
      </div>
    )
  }
}