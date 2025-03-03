import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description.slice(0, 50)}...</p>
          <p className="product-price">${product.price}</p>
          <div className="star-rating">⭐ {product.rating} / 5</div>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`}> {/* ✅ Fixed syntax */}
            <button className="view-details">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
