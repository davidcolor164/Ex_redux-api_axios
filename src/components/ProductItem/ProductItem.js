import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProductItem extends Component {
    render() {
        var {product ,index} = this.props;
        var statusName = product.status ? 'Con hang' : 'Het hang';
        var statusClass = product.status ? 'success' : 'warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td> {product.id} </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><span className={`badge badge-${statusClass}`}>{statusName} </span></td>
                <td>
                    <Link to={`/product/${product.id}/edit` }className="btn btn-primary mr-3">Sua</Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)} >Xoa</button>
                </td>
            </tr>
        )
    }
    onDelete =(id) =>{
        if(confirm('Ban co chac chan muon xoa?')){ // eslint-disable-line
            this.props.onDelete(id)
        }
    }
}
