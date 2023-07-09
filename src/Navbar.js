import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
      <FontAwesomeIcon alt="cart-icon" icon={faCartShopping} style={styles.cartIcon} />
      <span style={styles.cartCount}>{props.count()}</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 35,
    marginRight: 40,
  },
  nav: {
    height: 70,
    background: "#9681EB",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "#FAF0D7",
    borderRadius: "100%",
    padding: "4px 8px",
    position: "absolute",
    right: 15,
    top: -12,
  },
};
export default Navbar;
