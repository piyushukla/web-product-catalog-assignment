import "./CategorySidebar.css";

const categories = [
  "All",
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics"
];

function CategorySidebar({ selectedCategory, onSelect }) {
  return (
    <div className="sidebar">

      {categories.map(category => (
        // Highlights the currently selected category
        <p key={category}  className={`sidebar-item ${
            selectedCategory === category ? "active" : ""
          }`} onClick={() => onSelect(category)}>
          {category}
        </p>
      ))}
    </div>
  );
}

export default CategorySidebar;
