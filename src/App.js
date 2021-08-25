import React, { Component } from "react";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SideCart from "./components/SideCart";
import { Route, Switch } from "react-router-dom";


class App extends Component {

  state = {
    cart: [],
    isOpen: false,
    qty: 0
  }
  addToCart = (product) => {
    let tempCart = [...this.state.cart]
    let tempItem = tempCart.find(item => item.id === product.id)

    if (!tempItem) {
      let cartItem = { ...product, qty: 1 }
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.qty++;
    }
    let qty = tempCart.map(item => item.qty).reduce((cur, acc) => (cur + acc), 0)
    this.setState({ cart: tempCart, qty: qty })
  }

  toggleCart = (e) => {
    this.setState(prev => ({ ...prev, isOpen: !prev.isOpen }))
  }

  render() {
    return (
      <div className="app" style={{ position: 'relative' }}>
        <SideCart
          cart={this.state.cart}
          isOpen={this.state.isOpen}
          closeCart={this.toggleCart}
          qty={this.state.qty}
        />
        <Header />
        <Navbar qty={this.state.qty} openCart={this.toggleCart} />
        <Categories />

        <Switch>
          <Route exact path='/'>
            <Home addToCart={this.addToCart} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
