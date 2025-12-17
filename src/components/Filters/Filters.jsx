import "./Filters.css";

function Filters({
  priceRange,
  onPriceChange,
  onSortChange,
  sortType,
  searchText,
  onSearchChange,
}) {
    console.log("hekki",sortType)
  return (
    <div className="filters">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="price-filter">
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
        />
        <span className="price-value"> $0 – ${priceRange}</span>
      </div>

      <button
        className={`filter-button ${sortType === "price" ? "active" : ""}`}
        onClick={() => onSortChange("price")}
      >
        Sort by Price
      </button>

      <button
        className={`filter-button ${sortType === "discount" ? "active" : ""}`}
        onClick={() => onSortChange("discount")}
      >
        Sort by Discount
      </button>
    </div>
  );
}

export default Filters;
