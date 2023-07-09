import React from "react";
import {
  AiFillPlusCircle,
  AiFillDelete,
  AiFillMinusCircle,
} from "react-icons/ai";

const CartItem = (props) => {
  // increaseQuantity = () => {
  //     // console.log("quantity", this.state.qty);

  //     //method 1 to use setState
  //     // this.setState({
  //     //     qty: this.state.qty + 1
  //     // });

  //     //method 2 to use setState
  //     this.setState((prevState)=>{
  //         return {
  //             qty: prevState.qty + 1
  //         }
  //     },
  //     //callback function.
  //     // ()=>{
  //     //     console.log("quantity", this.state.qty);
  //     // }
  //     )
  // }

  // decreaseQuantity = () => {
  //     // console.log("quantity : ", this.state.qty);
  //     const {qty} = this.state;
  //     if(qty === 0) {
  //         return;
  //     }

  //     this.setState((prevState) =>{
  //         return {
  //             qty : prevState.qty - 1
  //         }
  //     })
  // }

  // console.log("render");
  // console.log("this.props", this.props);

  
  const { price, title, qty, img } = props.product;
  const { product, 
          onDecreaseQuantity,
          onIncreaseQuantity,
          onDeleteItem 
   } = props;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="" src= {product.img}/>
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/* {Buttons} */}
          <AiFillPlusCircle
            alt="increase"
            className="action-icons"
            onClick={() => onIncreaseQuantity(product)}
          />

          <AiFillMinusCircle
            alt="decrease"
            className="action-icons"
            onClick={() => onDecreaseQuantity(product)}
          />

          <AiFillDelete
            alt="delete"
            className="action-icons"
            onClick={() => onDeleteItem(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 5,
    background: "#ccc",
  },
};

export default CartItem;
