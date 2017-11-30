import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Itens } from '../api/itens.js';

import Item from './Item.jsx'

class CrudItem extends Component {
 
 constructor(props) {
    super(props);
      this.state = {
      nome: true,
      quantidade: true,
      dataCompra: true,
      dataVencimento: true,
      estoqueMinimo: true,
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
    const quantidade = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
    const dataCompra = ReactDOM.findDOMNode(this.refs.textInput3).value.trim();
    const dataVencimento = ReactDOM.findDOMNode(this.refs.textInput4).value.trim();
    const estoqueMinimo = ReactDOM.findDOMNode(this.refs.textInput5).value.trim();
      

    if(nome.length > 0) 
      this.setState({nome: true});
    else
      this.setState({nome: false});

    if(parseInt(quantidade) > 0) 
      this.setState({quantidade: true});
    else
      this.setState({quantidade: false});

    /*if(dataCompra.lenght > 0)
      this.setState({dataCompra: true});
    else
      this.setState({dataCompra: false});

    if(parseDate('dd/mm/yyyy', dataCompra) <= parseDate('dd/mm/yyyy', dataVencimento))
      this.setState({dataVencimento: true});
    else
      this.setState({dataVencimento: false});

    if(dataVencimento.lenght > 0)
      this.setState({dataVencimento: true});
    else
      this.setState({dataVencimento: false});*/

    if(parseInt(estoqueMinimo) > 0) {
      this.setState({estoqueMinimo: true});
      this.setState({aux: true});
    }
    else {
      this.setState({estoqueMinimo: false});
    }
    
    


    if(this.state.nome && this.state.quantidade && this.state.dataCompra && this.state.estoqueMinimo && this.state.aux){
      console.log(nome);
      Itens.insert({
        nome,
        quantidade,
        dataCompra,
        dataVencimento,
        estoqueMinimo,
      });

    }

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.textInput2).value = '';
    ReactDOM.findDOMNode(this.refs.textInput3).value = '';
    ReactDOM.findDOMNode(this.refs.textInput4).value = '';
    ReactDOM.findDOMNode(this.refs.textInput5).value = '';
    ReactDOM.findDOMNode(this.refs.textInput6).value = '';

    this.setState({aux: false});
  }

  renderItens() {
    return this.props.itens.map((item) => (
      <Item key={item._id} item={item} />
    ));
  }

  render() {

    let displayErrorQuantidade = this.state.quantidade ? ' ': this.renderErrorMsg("Quantidade") ;
    let displayErrorDataCompra = this.state.dataCompra ? ' ': this.renderErrorMsg("A Data da Compra é ") ;
    let displayErrorDataVencimento = this.state.dataVencimento ? ' ': this.renderErrorMsg("A Data da Vencimento é ") ;
    let displayErrorNome = this.state.nome ? ' ': this.renderErrorMsg("Nome") ;
    let displayErrorEstoqueMinimo = this.state.estoqueMinimo ? ' ': this.renderErrorMsg("Valor de Estoque Minimo ") ;

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
          <h1>Estoque <a className="btn-lg btn-md btn btn-info" href="http://localhost:3000/item/ajuda" role="button">
            <span className="glyphicon glyphicon-info-sign"></span> Ajuda</a></h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <br/>
            <input className="form-control" type="text" ref="textInput" placeholder="Nome"/>
            {displayErrorNome}
            <input className="form-control" type="text" ref="textInput2" placeholder="Quantidade"/>
            {displayErrorQuantidade}
            <input className="form-control" type="date" ref="textInput3" placeholder="Data da compra - DD/MM/AAAA"/>
            {displayErrorDataCompra}
            <input className="form-control" type="date" ref="textInput4" placeholder="Data do vencimento"/>
            {displayErrorDataVencimento}
            <input className="form-control" type="text" ref="textInput5" placeholder="Estoque minimo"/>
            {displayErrorEstoqueMinimo}
            <input className="btn btn-primary btn-block" type="submit" value="Adicionar Item ao Estoque" />
            <br/>
            <p>Os campos com ' * ' são obrigatórios</p>
          </form>
          <h3>Todos os itens <a className="btn-lg btn-md btn btn-primary" href="http://localhost:3000/item/relatorio" role="button">
            <span className="glyphicon glyphicon-list-alt"></span> Relatório</a></h3>
         <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Data da Compra</th>
              <th>Data do Vencimento</th>
              <th>Estoque Minimo</th>
              </tr>
          </thead>
          <tbody>
            {this.renderItens()}
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
    itens: Itens.find({}).fetch(),
  };
}, CrudItem);