import React, { Component } from 'react';
import callAPI from './../../utils/apiCaller';
import * as Endpoint from "./../../constants/endpoints";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Action from "./../../actions/index";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: false
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let { id } = match.params;
            //get product info when edit product
            callAPI('GET', `${Endpoint.PRODUCTS}/${id}`, null)
                .then(res => {
                    this.setState({
                        id: res.data.id,
                        name: res.data.name,
                        price: res.data.price,
                        status: res.data.status
                    })
                })
                .catch(err => console.log(err))
        }
    }

    handleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let { history } = this.props;
        let { id, name, price, status } = this.state;
        if (name && price && (status || status === false)) {
            //check if existsed id, then edit product
            if (id) {
                callAPI('PUT', `${Endpoint.PRODUCTS}/${id}`, {
                    name,
                    price,
                    status
                }).then(res => {
                    history.goBack()
                }).catch(err => console.log(err))
            } else {//otherwise add product to backend
                this.props.onAddProduct(this.state);
                history.goBack();
            }
        }
    }

    render() {
        let { name, price, status } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form onSubmit={this.handleSubmit}>
                    <legend>Add Product</legend>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder="Name"
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder="Price"
                            name='price'
                            value={price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="status"
                                    checked={status}
                                    onChange={this.handleChange}
                                />
                                in stock
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/product/list' className="btn btn-primary ml-4">Back</Link>
                </form>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onAddProduct: product => {
            dispatch(Action.actAddProductRequest(product))
        }
    }
}

export default connect(null, mapDispatchToProp)(ProductActionPage);