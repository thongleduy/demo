import React, { Component } from 'react';
export default class Carts extends Component {
    render() {
        console.log(this.props.children)
        return (
            <tbody>
                {this.props.children}
            </tbody>
        );
    }
}