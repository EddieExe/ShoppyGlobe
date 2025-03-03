import React from "react";
import ProductList from "../components/ProductList";

const Home = ({ addToCart }) => {
  return (
    <div className="home">
      <h1>
        <span className="grey">Welcome to</span> <span className="green">ShoppyGlobe!</span>
      </h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
