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
    render() {
        const {products} = this.state;
        return (
            <div className='cart'>
                {products.map((product)=>{
                    return <CartItem product = {product}  key = {product.id}/>
                })}
            </div>
        );
    }
}


export default Cart;