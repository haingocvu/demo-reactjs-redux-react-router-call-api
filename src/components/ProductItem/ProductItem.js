import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let { index, product } = this.props;
        let productStatus = product.status ? 'in stock' : 'out of stock';
        let productClass = product.status ? 'label-success' : 'label-warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label ${productClass}`}>{productStatus}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger ml-4">Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;