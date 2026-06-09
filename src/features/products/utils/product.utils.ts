import { Product } from "../types/product.types";

export const getUniqueBrands = (products: Product[]) => {
  return Array.from(
    new Set(products.map((product) => product.brand).filter(Boolean)),
  ).sort();
};

export const getPriceRange = (products: Product[]) => {
  if (!products.length) {
    return {
      minPrice: 0,
      maxPrice: 0,
    };
  }

  return {
    minPrice: Math.min(...products.map((p) => p.price)),
    maxPrice: Math.max(...products.map((p) => p.price)),
  };
};

