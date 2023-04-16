import { useState } from "react";
import "./styles.css";

const Main = () => {
  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1
    }
  ]);

  const onAddToCart = (product) => {
    setCartElements([...cartElements, product]);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartElements.map((element) => (
          <div key={element.quantity} className="cart-item">
            <div className="cart-item-image">
              <img src={element.imageUrl} alt={element.title} />
            </div>
            <div className="cart-item-details">
              <h3>{element.title}</h3>
              <p>Price: ${element.price}</p>
              <p>Quantity: {element.quantity}</p>
              <button
                class="shop-item-button"
                onClick={onAddToCart}
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
