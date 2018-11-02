import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product';
import CartContainer from './containers/cartContainer';

class App extends Component {
    render() {
        return (<div className="App">
            <Product />
            <CartContainer />
        </div>);
    }
}

export default App;
