import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>P1</td>
                <td>Iphone X</td>
                <td>20000000</td>
                <td>
                    <span className="label label-warning">out of stock</span>
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