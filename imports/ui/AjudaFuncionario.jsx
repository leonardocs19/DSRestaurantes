import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Ajuda - Gerenciador de Funcionários</h1>
        </header>

        <p><b>Para cadastro de funcionários:</b></p>
        <p>Insira os dados correspondentes no campos específicos, como nome, idade, cargo, salário, RG, CPF e E-Mail </p>
        <p>Lembrado que nome, idade, salário e CPF são obrigatórios</p>
        <p>Idade e salário devem ser valores não negativos, com a idade maior que 16 anos</p>
        <p>Nome deve conter pelo menos uma letra e o CPF deve ser válido</p>

        <p><b>Para exclusão de funcionários:</b></p>
        <p>Clique no botão X ao lado do nome do funcionário para realizar uma exclusão</p>

        <p><b>Para visualização de funcionários:</b></p>
        <p>Os funcionários cadastrados são visualiados logo abaixo a tela de cadastro</p>

        <a className="btn btn-primary btn-md" href="http://localhost:3000/funcionario" role="button">Voltar</a>
      </div>
    )
  }
}