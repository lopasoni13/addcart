import React from "react";
import "../src/App.css";
import NavBar from "./components/navbar/NavBar";
import ProductList from "./components/productslist/ProductList";

function App() {
  return (
    <>
      <NavBar />
      <ProductList />
    </>
  );
}

export default App;
