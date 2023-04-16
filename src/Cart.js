import React from "react";
const Cart = ({ cartItems = [] }) => {
  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.title}>
              <img src={item.imageUrl} alt={item.title} />
              <div className="item-info">
                <p className="item-title">{item.title}</p>
                <p className="item-price">${item.price}</p>
                <button>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cart;
