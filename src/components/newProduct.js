import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions/product';

class NewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productname: '',
            price: '',
            id: ''
        }
    }

    renderGUID = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    handleOk = () => {
        var product = {
            id: this.state.id === '' ? this.renderGUID() : this.state.id,
            productname: this.state.productname,
            price: this.state.price
        }
        this.props._onToggleModal(false);
        this.props._onNewProduct(product);
        this.resetForm();
    }

    handleCancel = () => {
        this.resetForm();
        this.props._onToggleModal(false);
    }

    handleValue = (e) => {
        var element = e.target;
        this.setState({
            [element.name]: element.value
        })
    }

    resetForm = () => {
        this.setState({
            productname: '',
            price: '',
            id: ''
        })
    }

    componentWillReceiveProps(props) {
        let nextProps = props.productForEdit;
        if (nextProps) {
            this.setState({
                id: nextProps.id,
                productname: nextProps.productname,
                price: nextProps.price
            })
        }
        else {
            this.resetForm();
        }
    }

    render() {
        const { isShowModal } = this.props;
        return (
            <div>
                <Modal
                    centered
                    visible={isShowModal}
                    title={this.state.id !== '' ? "Edit Product" : "New Product"}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="form-control"
                            name="productname"
                            value={this.state.productname}
                            onChange={this.handleValue} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Price"
                            className="form-control"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleValue} />
                    </div>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isShowModal: state.toggleModal,
        productForEdit: state.productForEdit
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        _onNewProduct: (product) => {
            dispatch(actions.addProduct(product));
        },
        _onToggleModal: (status) => {
            dispatch(actions.toggleModal(status));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);