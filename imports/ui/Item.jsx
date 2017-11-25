import React, { Component } from 'react';

import { Itens } from '../api/itens.js';


export default class Item extends Component {

  deleteThisItem() {
    if (confirm ("Tem certeza que deseja excluir este item?")) 
      Itens.remove(this.props.item._id);
  }

  render() {

    return (
        <tr>
        <td>{this.props.item.nome}</td>
        <td>{this.props.item.quantidade}</td>
        <td>{this.props.item.dataVencimento}</td>
        <td>{this.props.item.dataCompra}</td>
        <td>{this.props.item.estoqueMinimo}</td>
        <td><button className="btn btn-danger btn-margin delete" onClick={this.deleteThisItem.bind(this)}>
        <span className="glyphicon glyphicon-remove"></span>
        </button></td>
        </tr>
    );
  }
}