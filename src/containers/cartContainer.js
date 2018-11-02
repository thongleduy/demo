import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carts from '../components/carts';
import CartItem from '../components/cartItem';
import * as actions from '../actions/product';
class CartContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { carts } = this.props;
        console.log(carts)
        return (
            <div className="container">
                <br />
                <div className="form-group">
                    Cart Total: {this.props.total}
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Product Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td></td>
                        </tr>
                    </thead>
                    <Carts>
                        {this.renderCart(carts)}
                    </Carts>
                    <tfoot>
                        <tr>
                            <td colSpan={5} className="text-right">
                                Total Price: {this.summaryCart(carts)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

    renderCart = (carts) => {
        var result = "There is no item to display.";
        if (carts.length > 0) {
            result = carts.map((element, index) => {
                return <CartItem data={element} key={index.toString()} _onAddMoreCart={this.props._onAddMoreCart} _onReduceCart={this.props._onReduceCart} _onRemoveCart={this.props._onRemoveCart}/>
            });

            return result;
        }

        return <CartItem data={null} />
    }

    summaryCart = (carts) => {
        var totalPrice = 0;
        carts.forEach(cart => {
            totalPrice += cart.quantity * cart.product.price;
        });
        return totalPrice;
    }
}


const mapStateToProps = state => {
    return {
        carts: state.carts,
        total: state.carts.length
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _onAddMoreCart: (cartId) => {
            dispatch(actions.addMoreCart(cartId));
        },
        _onReduceCart: (cartId) => {
            dispatch(actions.reduceCart(cartId));
        },
        _onRemoveCart: (cartId) => {
            dispatch(actions.removeCart(cartId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);