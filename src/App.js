import { useState } from "react";
import Cart from "./Cart";

import "./styles.css";
import Main from "./Main";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const cartElements = [
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
  ];

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/store">STORE</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <button className="cart-icon" onClick={handleCartClick}>
              <span>cartbutton</span>
            </button>
          </li>
        </ul>
      </nav>
      <Main />
      {showCart && <Cart cartElements={cartElements} />}
    </header>
  );
};

export default App;
