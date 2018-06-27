import React, { Component } from 'react';
import callAPI from './../../utils/apiCaller';

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

    handleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (name && (value || value === false)) {
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        let { history } = this.props;
        let { name, price, status } = this.state;
        if (name && price && (status || status === false)) {
            //submit product to backend
            callAPI('POST', 'products', {
                name,
                price,
                status
            }).then(data => {
                history.goBack();
            }).catch(err => console.log('error'))
        }
    }

    render() {
        let { match } = this.props;
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
                                    value={status}
                                    onChange={this.handleChange}
                                />
                                in stock
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ProductActionPage;