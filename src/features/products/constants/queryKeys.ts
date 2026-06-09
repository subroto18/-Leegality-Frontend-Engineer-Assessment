export const productQueryKeys = {
  products: ({
    limit,
    skip,
    category,
    search,
  }: {
    limit: number;
    skip: number;
    category?: string;
    search?: string;
  }) => ["products", limit, skip, category, search],

  product: (id?: string) => ["product", id],

  categories: ["categories"],
};
