import React, { Component } from 'react';

import { Financas } from '../api/financas.js';


export default class Financa extends Component {

  deleteThisFinanca() {
    if (confirm("Tem certeza que deseja deletar a Despesa selecionada?"))
      Financas.remove(this.props.financa._id);
  }

  render() {

    return (
      <tr>
        <td>{this.props.financa.nome}</td>
        <td>{this.props.financa.valor}</td>
        <td>{this.props.financa.data}</td>
        <td>{this.props.financa.NFe}</td>
        <td><button className="btn btn-danger btn-margin delete" onClick={this.deleteThisFinanca.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button></td>
      </tr> 
    );
  }
}