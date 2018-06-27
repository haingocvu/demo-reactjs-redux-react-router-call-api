import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        let {match} = this.props;
        console.log(match);
        return (           
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">              
                <form>
                    <legend>Add Product</legend>           
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" id="" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label>Status</label>  
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="" />
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