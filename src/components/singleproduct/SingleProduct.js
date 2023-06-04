import React from "react";
import "../singleproduct/SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

function SingleProduct({ product }) {
  const dispach = useDispatch();
  const select = useSelector((state) => state.cartReducer.cart);

  let currntQuntity = select.find((item) => item.id == product.id);
  let quntity = currntQuntity ? currntQuntity.quntity : 0;
  return (
    <>
      <div className="containetr">
        <img className="setImage" src={product.category.image} alt="" />
        <div className="setContent">
          <h2 className="title">{product.title}</h2>
          <p className="price">{product.price}</p>

          <div className="setButton">
            <button
              onClick={() => {
                dispach(addToCart(product.id));
                console.log("clik");
              }}
              className="btn"
            >
              +
            </button>
            <p className="quntity">{quntity}</p>
            <button
              onClick={() => dispach(removeFromCart(product.id))}
              className="btn"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
