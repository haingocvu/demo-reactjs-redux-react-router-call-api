import React, { Component } from 'react';
import ProductsList from "./../../components/ProductsList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { map } from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import callAPI from "./../../utils/apiCaller";
import * as Endpoints from "./../../constants/endpoints";
import { findIndex } from 'lodash';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        callAPI('GET', Endpoints.PRODUCTS, null)
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        //let { products } = this.props;
        let { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-success mb-4">Add Product</Link>
                <ProductsList>
                    {this.showProductItem(products)}
                </ProductsList>
            </div>
        )
    }

    onDeleteItem = id => {
        let { products } = this.state;
        //delete on server
        callAPI('DELETE', `${Endpoints.PRODUCTS}/${id}`)
            .then(res => {
                //delete on local
                if (res.status === 200 || res.status === 201) {
                    let index = findIndex(products, product => {
                        return product.id === id
                    })
                    if (index !== -1) {
                        products.splice(index, 1);
                        this.setState({
                            products
                        })
                    }
                }
            })
            .catch(err => console.log(err))
    }

    showProductItem = products => {
        let rs = null;
        if (products.length) {
            rs = map(products, (product, index) => {
                return (
                    <ProductItem key={index} index={index} product={product} onDeleteItem={this.onDeleteItem} />
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