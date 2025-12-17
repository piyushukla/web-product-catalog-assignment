import ProductCard from "../ProductCard/ProductCard";
import noProductImg from "../../assets/no_product_found.png";

import "./ProductGrid.css";

function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="no-products">
             <h3>No products found</h3>
             <p>Try changing category or price range</p>
            <img src={noProductImg} alt="No products found" />
      </div>
    );
  }
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
