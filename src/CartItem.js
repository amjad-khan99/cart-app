import React from 'react';
import { AiFillPlusCircle, AiFillDelete, AiFillMinusCircle } from 'react-icons/ai';

class CartItem extends React.Component {
    
    
    increaseQuantity = () => {
        // console.log("quantity", this.state.qty);


        //method 1 to use setState
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //method 2 to use setState
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1
            }
        }, 
        //callback function.
        // ()=>{
        //     console.log("quantity", this.state.qty);
        // }
        )
    }

    decreaseQuantity = () => {
        // console.log("quantity : ", this.state.qty);
        const {qty} = this.state;
        if(qty === 0) {
            return;
        }

        this.setState((prevState) =>{
            return {
                qty : prevState.qty - 1
            }
        })
    }
    render () {
        // console.log("render");
        // console.log("this.props", this.props);
        const {price, title, qty, img} = this.props.product;
        return(
            <div className='cart-item'>
                <div  className='left-block'>
                    <img style = {styles.image} alt = ""/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>

                        {/* {Buttons} */}
                        <AiFillPlusCircle 
                        alt = 'increse' 
                        className='action-icons'
                        onClick={this.increaseQuantity}
                        />

                        <AiFillMinusCircle 
                        alt="decrese" 
                        className='action-icons' 
                        onClick={this.decreaseQuantity}
                        />

                        <AiFillDelete 
                        alt="delete"  
                        className='action-icons'
                        />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 5,
        background: '#ccc'
    }
}

export default CartItem;