// Service layer to isolate API communication
// Helps keep components free from data-fetching logic

export const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };
  