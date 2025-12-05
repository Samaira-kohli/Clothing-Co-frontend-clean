import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import "./Cart.css";
import { object } from "framer-motion/client";

const Cart = ({ isOpen, closeCart }) => {
  const { cartItem, all_product, addToCart, removeFromCart, setQuantity, setCartItem, quantity } = useContext(ShopContext);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    Object.values(cartItem).forEach((q) => total = total + q);
    setQuantity(total);
  }, [cartItem])

  useEffect(() => {
    let total = 0;

    Object.entries(cartItem).forEach(([key, qty]) => {
      if (qty === 0) return;

      const [id] = key.split("_");
      const product = all_product.find(item => item.id == id);

      if (product) {
        total += product.price * qty;
      }
    });

    setSubTotal(total);
  }, [cartItem, all_product]);


  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      {/* Header */}
      <div className="cart-top">
        <h2>CART</h2>
        <button className="close-btn" onClick={closeCart}>×</button>
      </div>

      <div className="cart-content">
        {quantity === 0 ? <p className="emptyCart">Your cart is currently empty.</p>
          : Object.entries(cartItem).map(([key, qty]) => {
            if (qty === 0) {
              return null;
            }
            // cart item ===.. {26_XS: 3}

            const [idx, size] = key.split('_');
            const product = all_product.find((item) => item.id == idx)
            return (
              <div className="cart-item" key={key}>
                <img src={product.image[0]} alt="" className="cart-img" />
                <div className="cart-info">
                  <h3>{product.name}</h3>
                  <p className="price">Rs. {product.price}</p>
                  <p className="price">Size: {size}</p>

                  <div className="qty-row">
                    <div className="qty-buttons">
                      <button onClick={() => removeFromCart(idx, size)}>-</button>
                      <span>{cartItem[key]}</span>
                      <button onClick={() => addToCart(idx, size)}>+</button>
                    </div>
                  </div>

                  <button className="remove-btn" onClick={() => setCartItem((prev) => ({ ...prev, [key]: 0 }))}>
                    Remove
                  </button>
                </div>
              </div>
            )
          })}

      </div>

      {/* Footer */}
      {quantity > 0 ? (
        <div className="cart-bottom">
          <p className="note-title">Add order note</p>
          <p className="subtext">Taxes and shipping calculated at checkout</p>

          <h3 className="subtotal">Subtotal: <span>Rs. {subTotal}</span></h3>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      ) : ''}

    </div>
  );
};

export default Cart;

