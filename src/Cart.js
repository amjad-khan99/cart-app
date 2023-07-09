import React from 'react';
import { } from 'react-icons/ai';
import CartItem from './CartItem';

const Cart = (props) => {

    const {products} = props;

    return (
        <div className='cart'>
            {products.map((product)=>{
                return( 
                    <CartItem 
                    product = {product}  
                    key = {product.id}
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteItem = {props.onDeleteItem}
                    />
                )
            })}
        </div>
    );
}


export default Cart;