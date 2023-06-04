import React from "react";
import "../navbar/NavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function NavBar() {
  const data = useSelector((state) => state.cartReducer.cart);

  let quntitiy = 0;
  data.forEach((element) => {
    quntitiy += element.quntity;
  });

  return (
    <nav>
      <h1 className="banner">My myntra</h1>
      <div className="leftContent">
        <AiOutlineShoppingCart size={"40px"} className="icone" />
        <p className="counter">{quntitiy}</p>
      </div>
    </nav>
  );
}

export default NavBar;
