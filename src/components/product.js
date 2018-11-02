import React, { Component } from 'react';
import ProductItem from './productItem';
import NewProduct from './newProduct';
import * as actions from '../actions/product';
import { connect } from 'react-redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewProduct: false,
        }
    }
    newProduct = () => {
        this.props._onToggleModal(true);
        this.props._onEditProduct();
    }
    render() {
        return (
            <div className="container">
                <br />
                <div className="form-group">
                    Total: {this.props.total}    <button className="btn btn-primary" type="button" onClick={this.newProduct}>Add New</button>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>
                                Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <ProductItem />
                </table>
                <NewProduct />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        total: state.products.length
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _onToggleModal: () => {
            dispatch(actions.toggleModal(true));
        },
        _onEditProduct: () => {
            dispatch(actions.editProduct('-1'));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);