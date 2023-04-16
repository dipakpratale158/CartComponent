import { useState } from "react";
import Cart from "./Cart";
import "./styles.css";

const App = (props) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };
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
            <button className="cart-icon" onClick={props.handleCartClick}>
              <span>cartbutton</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default App;
