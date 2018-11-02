import React, { Component } from 'react';
import Products from '../components/product';
import ProductItem from '../components/productItem';
import { editProduct } from '../actions/product';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     showNewProduct: false,
        // }
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
                    Total: {this.props.total}
                    <button className="btn btn-primary" type="button" onClick={this.newProduct}>Add New</button>
                </div>
                <Users />
                <NewUser />
            </div>
        )
    }
}

function renderUserItem(products) {
    var e = products.map((p, index) => {
        return (
            <tr key={index.toString()}>
                <td>
                    {p.id}
                </td>
                <td>
                    {p.username}
                </td>
                <td>
                    {p.address}
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => removeProduct(p.id)}>Delete</button>
                    <button type="button" className="btn btn-primary" onClick={() => editProduct(p.id)}>Edit</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {e}
        </tbody>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);