# ShopSphere

ShopSphere is a modern e-commerce application built with React, TypeScript, React Query, Ant Design, and Tailwind CSS. The application allows users to browse products, search products, apply filters, view product details, and enjoy a responsive shopping experience across desktop and mobile devices.

---

## Features

### Product Listing Page

- Browse products in a responsive grid layout
- Search products by name
- Filter products by category
- Filter products by brand
- Filter products by price range
- Pagination support
- Loading and error states
- Mobile-friendly filter drawer

### Product Detail Page

- Product image gallery
- Product information (price, rating, stock, brand, category)
- Product description
- Product reviews with ratings
- Back navigation to product listing

### Responsive Design

- Desktop sidebar filters
- Mobile filter drawer
- Responsive product grid
- Optimized layouts for different screen sizes

---

## Tech Stack

### Frontend

- React 18
- TypeScript
- React Router DOM v7
- TanStack React Query v5
- Ant Design v5
- Tailwind CSS v4
- Axios
- Vite

### State Management

- React Context API
- React Query Cache

### API

- DummyJSON Products API

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <repository-url>
cd shopsphere
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Application will be available at:

```txt
http://localhost:5173
```

### 4. Build Application

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```txt
src
│
├── api
│   ├── axios
│   ├── endpoints
│   └── services
│
├── components
│   ├── common
│   └── ui
│
├── features
│   └── products
│       ├── components
│       ├── context
│       ├── hooks
│       ├── pages
│       ├── types
│       └── utils
│
├── providers
├── routes
└── assets
```

---

## Assumptions Made

### Category Filtering

The DummyJSON API provides a category endpoint for a single category at a time. To support multiple category selections in the UI, category filtering is handled on the client side after products are fetched.

### Brand Filtering

The API does not provide a dedicated endpoint for brand-based filtering. Brand filters are applied on the client side.

### Price Range Filtering

The API does not support filtering products by price range. Price filtering is implemented on the client side.

### Product Images

The first image is used as the default display image, while additional images are shown as selectable thumbnails.

### Reviews

Review count is calculated from the reviews array returned by the API and displayed alongside product ratings.

---

## Architectural Decisions

### Feature-Based Architecture

The application follows a feature-based folder structure where all product-related functionality is grouped under the `features/products` directory.

Benefits:

- Better scalability
- Easier maintenance
- Clear separation of concerns
- Improved developer experience

### React Query for Data Fetching

React Query is used for:

- API state management
- Request caching
- Loading and error handling
- Request deduplication
- Improved performance

### Dedicated API Layer

All API communication is centralized in the `api/services` directory.

Benefits:

- Reusable API methods
- Cleaner hooks
- Easier maintenance
- Better separation of concerns

### Custom Hooks

Business logic and API interactions are encapsulated in reusable hooks:

- useProducts
- useProduct
- useCategories

This keeps UI components focused solely on presentation.

### Context-Based Layout State

React Context is used to manage layout-specific UI state such as:

- Desktop filter visibility
- Mobile filter drawer state

### Reusable UI Components

Custom reusable UI components were created for:

- Button
- Input
- Checkbox
- Pagination
- Container

This ensures a consistent design system across the application.

---

## Improvements If Given More Time

### URL-Based Filter Persistence

Persist search and filter values in URL query parameters to enable:

- Shareable URLs
- Browser navigation support
- State persistence after refresh

### Debounced Search

Implement debounced API requests for search input to reduce unnecessary network calls.

### Enhanced Loading Experience

Replace basic loading placeholders with dedicated skeleton components for a smoother user experience.

### Unit Testing

Add comprehensive tests using:

- Vitest
- React Testing Library

Covering:

- Components
- Hooks
- Utility functions
- Filter logic

### End-to-End Testing

Introduce Playwright or Cypress for automated user-flow testing.

### Accessibility Improvements

- Keyboard navigation support
- Improved focus management
- ARIA attributes
- Screen reader compatibility

### Product Sorting

Add sorting options:

- Price
- Rating
- Product Name
- Popularity

### Wishlist and Cart Functionality

Future enhancements could include:

- Wishlist management
- Shopping cart
- Checkout workflow

---

## API Endpoints Used

```txt
GET /products

GET /products/{id}

GET /products/categories

GET /products/search?q={query}
```

Base URL:

```txt
https://dummyjson.com/products
```

---

## Author

Subroto Chakraborty

Frontend Developer
