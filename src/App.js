import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (

            <div className="container">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <div className="navbar navbar-default">
                            <a className="navbar-brand">Demo Call API</a>
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a>Home</a>
                                </li>
                                <li>
                                    <a>Products</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-success mb-4">Add Product</button>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Product List</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Id Product</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default App;
