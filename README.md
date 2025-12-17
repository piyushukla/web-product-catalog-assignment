# Product Listing App (React + Vite)

This is a product listing application built using **React** and **Vite**, consuming data from the **Fake Store API**.

The application allows users to browse products by category, filter by price range, search by keywords, and sort products based on price or category-based discounts.

---

##  Features

- Fetches products from Fake Store API
- Category-based filtering
- Price range filtering using slider
- Search products by title and description
- Sort products by price
- Sort products by discount (applicable only when "All" categories is selected)
- Product rating display using stars
- Read more / Read less for long descriptions
- Fallback UI for empty results
- Responsive layout (desktop, tablet, mobile)

---

##  Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Plain CSS (no inline styles)
- Fake Store API

---

##  Project Structure

The project follows a **component-based architecture** with clear separation of concerns:

- `components/` – UI components (Sidebar, Filters, ProductCard, ProductGrid)
- `services/` – API calls
- `utils/` – Business logic (filtering, sorting)
- `App.jsx` – Main container and state management

---

## ▶️ Getting Started

```bash
npm install
npm run dev
