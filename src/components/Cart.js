import React from "react";
import "../styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.thumbnail} alt={item.title} className="cart-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-remove-container">
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p>
              <span className="grey">Grand Total:</span>
              <span className="green"> ${totalPrice.toFixed(2)}</span>
            </p>
          </div>

          <button className="buy-now" onClick={() => window.location.href = "/checkout"}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
