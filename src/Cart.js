import React from 'react';
import { } from 'react-icons/ai';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products:[
                {
                    price: 130000,
                    title: 'i phone',
                    qty: 1,
                    img :'',
                    id:1
                },
                {
                    price: 99000,
                    title: 'Apple watch',
                    qty: 1,
                    img :'',
                    id:2
                },
                {
                    price: 1650000,
                    title: 'Mahindra Thar',
                    qty: 1,
                    img :'',
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
    render() {
        const {products} = this.state;
        return (
            <div className='cart'>
                {products.map((product)=>{
                    return( 
                     <CartItem 
                      product = {product}  
                      key = {product.id}
                      onIncreaseQuantity = {this.handleIncreaseQuantity}
                      onDecreaseQuantity = {this.handleDecreaseQuantity}
                      onDeleteItem = {this.handleDeleteItem}
                     />
                    )
                })}
            </div>
        );
    }
}


export default Cart;