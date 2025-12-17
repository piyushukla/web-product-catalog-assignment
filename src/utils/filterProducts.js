export const filterProducts = (products, category, maxPrice) => {
    return products.filter(product => {
      const categoryMatch =
        category === "All" || product.category === category;
  
      const priceMatch = product.price <= maxPrice;
  
      return categoryMatch && priceMatch;
    });
  };
  