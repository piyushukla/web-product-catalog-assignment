
// Applies discount-based sorting only when 'All' category is selected
// Assumption: 10% discount on jewellery and 30% on men's clothing

export const sortProducts = (products, sortType, selectedCategory) => {
    const discountMap = {
      "jewelery": 0.1,
      "men's clothing": 0.3
    };
  
    const sorted = [...products];
  
    if (sortType === "price") {
      sorted.sort((a, b) => a.price - b.price);
    }
  
    if (sortType === "discount" && selectedCategory === "All") {
      sorted.sort((a, b) => {
        const discountA = discountMap[a.category] || 0;
        const discountB = discountMap[b.category] || 0;
        return discountB - discountA;
      });
    }
  
    return sorted;
  };
  