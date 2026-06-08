import Checkbox from "@/components/ui/Checkbox";

const brands = ["Apple", "Samsung", "Huawei", "Xiaomi", "OPPO"];

const BrandFilter = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Brands</h3>

      <div className="space-y-3">
        {brands.map((brand) => (
          <Checkbox key={brand} label={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
