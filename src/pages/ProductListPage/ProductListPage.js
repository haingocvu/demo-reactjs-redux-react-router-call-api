import React, { Component } from 'react';
import ProductsList from "./../../components/ProductsList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { map } from "lodash";
import { connect } from "react-redux";
import Axios from 'axios';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        Axios({
            method: 'GET',
            url: 'http://5b30fe687ad3350014b43369.mockapi.io/api/products',
            data: null
        }).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        //let { products } = this.props;
        let { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-success mb-4">Add Product</button>
                <ProductsList>
                    {this.showProductItem(products)}
                </ProductsList>
            </div>
        )
    }
    showProductItem = products => {
        let rs = null;
        if (products.length) {
            rs = map(products, (product, index) => {
                return (
                    <ProductItem key={index} index={index} product={product} />
                )
            })
        }
        return rs;
    }
}

const mapStateToProp = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProp, null)(ProductListPage);