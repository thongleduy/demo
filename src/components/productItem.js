import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/product';
import PropTypes from 'prop-types';
class ProductItem extends Component {
    render() {
        var { products, removeProduct, editProduct, addToCart } = this.props;
        var e = products.map((p, index) => {
            return (
                <tr key={index.toString()}>
                    <td>
                        {p.id}
                    </td>
                    <td>
                        {p.productname}
                    </td>
                    <td>
                        {p.price}
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={() => removeProduct(p.id)}>Delete</button>
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-primary" onClick={() => editProduct(p.id)}>Edit</button>
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-primary" onClick={() => addToCart(p)}>Add To Cart</button>
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
}

ProductItem.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            productname: PropTypes.string,
            price: PropTypes.number,
        })
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        removeProduct: (id) => {
            dispatch(actions.removeProduct(id));
        },
        editProduct: (id) => {
            dispatch(actions.toggleModal(true));
            dispatch(actions.editProduct(id));
        },
        addToCart: (p) => {
            dispatch(actions.addToCart(p));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);