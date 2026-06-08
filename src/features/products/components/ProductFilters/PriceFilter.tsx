// PriceFilter.tsx

const PriceFilter = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Price Range</h3>

      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Min"
          className="w-full border rounded-md px-3 py-2"
        />

        <input
          type="number"
          placeholder="Max"
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md">
        Apply
      </button>
    </div>
  );
};

export default PriceFilter;
