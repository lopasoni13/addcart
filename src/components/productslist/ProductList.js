import React, { useEffect } from "react";
import "../productslist/ProductList.css";
import SingleProduct from "../singleproduct/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/prductSlice";
import { Spin } from "antd";

function ProductList() {
  const dispach = useDispatch();
  const produsts = useSelector((state) => state.productReducer.product);
  const statuse = useSelector((state) => state.productReducer.statuse);

  console.log(statuse);
  useEffect(() => {
    dispach(fetchData());
  }, []);

  return (
    <div className="setProducts">
      {statuse === "loading" ? (
        <Spin
          style={{
            position: "absolute",
            top: "50%",
            right: "50%",
          }}
          size={"large"}
        />
      ) : (
        produsts.map((itme) => {
          return <SingleProduct key={itme.id} product={itme} />;
        })
      )}
    </div>
  );
}

export default ProductList;
