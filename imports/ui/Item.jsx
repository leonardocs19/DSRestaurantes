import React, { Component } from 'react';

import { Itens } from '../api/itens.js';


export default class Item extends Component {

  deleteThisItem() {
    Itens.remove(this.props.item._id);
  }

  render() {

    return (
      <li className="list-group-item">
        <b>{this.props.item.nome}</b>
        <button className="btn btn-default btn-margin delete" onClick={this.deleteThisItem.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <br/>
        <p>Nome: {this.props.item.nome} </p>
        <p>Quantidade: {this.props.item.quantidade} </p>
        <p>Data de vencimento: {this.props.item.dataVencimento} </p>
        <p>Data da compra: {this.props.item.dataCompra} </p>
        <p>Estoque mínimo: {this.props.item.estoqueMinimo} </p>
      </li>
    );
  }
}