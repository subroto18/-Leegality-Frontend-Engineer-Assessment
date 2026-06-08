// BrandFilter.tsx

const brands = ["Apple", "Samsung", "Huawei", "Xiaomi", "OPPO"];

const BrandFilter = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Brands</h3>

      <div className="space-y-3">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-3">
            <input type="checkbox" />
            <span>{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
