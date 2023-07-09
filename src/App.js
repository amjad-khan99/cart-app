import React from 'react';
// import { render } from "@testing-library/react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products:[
            {
                price: 130000,
                title: 'i phone 14',
                qty: 1,
                img :'https://images.unsplash.com/photo-1650580809796-39361e4d77f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
                id:1
            },
            {
                price: 99000,
                title: 'Apple watch',
                qty: 1,
                img :'https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80',
                id:2
            },
            {
                price: 16500,
                title: 'Ray-ban sunglasses',
                qty: 1,
                img :'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
                id:3
            }
        ]
    }
}

handleIncreaseQuantity = (product) =>{
    // console.log("hey please increase the qty of ", product);
    const {products} = this.state;

    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products // similar to products: products because names are same.
    });
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;
    if(products[index].qty < 0) {
      return;
    }
    this.setState({
        products
    });
}

handleDeleteItem = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => { return (item.id !== id)});
    this.setState({
        products : items
    });
}

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  });
  return count;
}

getCartValue = () => {
  const {products} = this.state;
  let cartValue = 0;
  products.map((product) => {
    cartValue += product.qty* product.price;
  });
  return cartValue;
}
render() {
  const {products} = this.state; 
  return (
    <div className="App">
       <Navbar
        count = {this.getCartCount}
       />
       <Cart
       products = {products}
       onIncreaseQuantity = {this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteItem = {this.handleDeleteItem}
       />
       <div style={{fontSize: 25, padding: 10}}>
        Cart value: {this.getCartValue()}
       </div>
    </div>
  );
}
}

export default App;
