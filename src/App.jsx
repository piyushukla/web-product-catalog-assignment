import { useEffect, useState } from "react";
import "./App.css";
import { fetchProducts } from "./services/productService";
import CategorySidebar from "./components/CategorySidebar/CategorySidebar";
import Filters from "./components/Filters/Filters";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { filterProducts } from "./utils/filterProducts";
import { sortProducts } from "./utils/sortProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortType, setSortType] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  //  Category + price filter
  const filteredProducts = filterProducts(
    products,
    selectedCategory,
    priceRange
  );

  //  Search filter
  const searchedProducts = filteredProducts.filter((product) => {
    const query = searchText.toLowerCase();

    return (
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  // Sort (SEARCHED PRODUCTS PASS KARO)
  const finalProducts = sortProducts(
    searchedProducts,
    sortType,
    selectedCategory
  );

  return (
    <div className="app">
      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="main-content">
        <Filters
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          onSortChange={setSortType}
          searchText={searchText}
          onSearchChange={setSearchText}
          sortType={sortType}
        />

        <ProductGrid products={finalProducts} />
      </div>
    </div>
  );
}

export default App;
