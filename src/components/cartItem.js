import React, { Component } from 'react';
export default class CartItem extends Component {
    render() {
        var {
            data
        } = this.props;
        return (
            <tr>
                <td colSpan={data !== null ? 0 : 5}>{data !== null ? data.id : "There is no items no display."}</td>
                <td style={{ display: data !== null ? "" : "none" }} >{data !== null ? data.product.productname : ""}</td>
                <td style={{ display: data !== null ? "" : "none" }} ><button type="button" onClick={() => this.onReduceCart(data.id)}>-</button>&nbsp;{data !== null ? data.quantity : 0}&nbsp;<button type="button" onClick={() => this.props._onAddMoreCart(data.id)}>+</button></td>
                <td style={{ display: data !== null ? "" : "none" }} >{data !== null ? data.product.price * data.quantity : 0}</td>
                <td style={{ display: data !== null ? "" : "none" }}><button type="button" className="btn" onClick={() => this.removeCart(data.id)}>Remove</button></td>
            </tr>
        );

    }

    onReduceCart = (cartId) => {
        this.props._onReduceCart(cartId);
    }

    removeCart = (cartId) => {
        this.props._onRemoveCart(cartId);
    }
}

