import { useState } from "react";
import "./ProductCard.css";


function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  const MAX_LENGTH = 120;
  const description = product.description;
  const isLong = description.length > MAX_LENGTH;

  const textToShow = expanded ? description : description.slice(0, MAX_LENGTH);

  return (
    <div className="card">
      <h4>{product?.title}</h4>
      <img src={product?.image} alt={product?.title} />
      <p>${product?.price}</p>
      {/*  Rating */}
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < product?.rating?.rate ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
        <span className="rating-count">({product?.rating?.count})</span>
      </div>
      {/* Description */}
      <p className="description"> 
{/* Allows users to expand content using Read more / Read less */}
        {textToShow}
        {!expanded && isLong && "... "}
        {isLong && (
          <span
            className="read-more-inline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read less" : "Read more"}
          </span>
        )}
      </p>
    </div>
  );
}

export default ProductCard;
