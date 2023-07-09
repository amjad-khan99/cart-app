import React from 'react';
// import { render } from "@testing-library/react";
import Cart from "./Cart";
import Navbar from "./Navbar";
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products:[],
        loading: true
    }
    this.db = firebase.firestore();
}

componentDidMount () {
  // firebase
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot)=>{
  //   console.log(snapshot);
  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data());
  //   });

  //   const products = snapshot.docs.map((doc)=>{
  //     const data = doc.data();
  //     data['id'] = doc.id;
  //     return data;
  //   });

  //   this.setState({
  //     products,
  //     loading: false
  //   })
  //  })

  this.db
   .collection('products')
   .onSnapshot((snapshot)=>{
    console.log(snapshot);
    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    });

    const products = snapshot.docs.map((doc)=>{
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    });

    this.setState({
      products,
      loading: false
    })
   })
}

handleIncreaseQuantity = (product) =>{
    // console.log("hey please increase the qty of ", product);
    const {products} = this.state;

    const index = products.indexOf(product);
    
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() =>{
        console.log('updated successfully')
      })
      .catch((error) =>{
        console.log('Erro: ', error);
      })
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0) {
      return;
    }
    
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
     .update({
      qty: products[index].qty - 1
     })
     .then(() =>{
      console.log('updated successfully')
      })
     .catch((error) =>{
      console.log('Error: ', error);
      })
}

handleDeleteItem = (id) => {
    // const {products} = this.state;
    // const items = products.filter((item) => { return (item.id !== id)});
    // this.setState({
    //     products : items
    // });

    const docRef = this.db.collection('products').doc(id);

    docRef.delete()
    .then(() =>{
      console.log('deleted successfully')
      })
     .catch((error) =>{
      console.log('Error: ', error);
      })
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
    return '';
  });
  return cartValue;
}
render() {
  const {products, loading} = this.state; 
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
       {loading && <h1>Loading.....</h1>}
    </div>
  );
}
}

export default App;
