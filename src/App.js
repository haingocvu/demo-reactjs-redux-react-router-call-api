import React, { Component } from 'react';
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductsList/ProductList";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* Menu */}
                    <Menu />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-success mb-4">Add Product</button>
                        {/* Product list */}
                        <ProductList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
