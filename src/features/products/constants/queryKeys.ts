export const productQueryKeys = {
  products: (limit: number, skip: number) => ["products", limit, skip],
  product: (id?: string) => ["product", id],
  categories: ["categories"],
};
