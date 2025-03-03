import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details-info">
        <h2>{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-category">Category: {product.category}</p>
        <div className="product-rating">⭐ {product.rating} / 5</div>
        <p className="product-description">{product.description}</p>
        <div className="buttons">
          <button
            className="add-to-cart"
            onClick={() => addToCart({ ...product, quantity: 1 })}
          >
            Add to Cart
          </button>
          <button
            className="buy-now"
            onClick={() => (window.location.href = "/checkout")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
