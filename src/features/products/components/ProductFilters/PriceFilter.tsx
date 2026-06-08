import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const PriceFilter = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Price Range</h3>

      <div className="flex gap-3">
        <Input
          type="number"
          placeholder="Min"
          className="w-full border rounded-md px-3 py-2"
        />

        <Input
          type="number"
          placeholder="Max"
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <Button className="w-full mt-4 !bg-blue-500 !text-white py-2 rounded-md">
        Apply
      </Button>
    </div>
  );
};

export default PriceFilter;
