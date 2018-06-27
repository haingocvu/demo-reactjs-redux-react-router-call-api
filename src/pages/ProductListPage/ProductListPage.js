import React, { Component } from 'react';
import ProductsList from "./../../components/ProductsList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { map } from "lodash";
import { connect } from "react-redux";
import callAPI from "./../../utils/apiCaller";
import * as Endpoints from "./../../constants/endpoints";

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