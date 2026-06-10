import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Button from "@/components/ui/Button";

interface FilterToolbarProps {
  showClear: boolean;
  onClear: () => void;
}

const FilterToolbar = ({ showClear, onClear }: FilterToolbarProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <SearchOutlined className="text-slate-500" />
        <h2 className="font-semibold text-slate-800">Filters</h2>
      </div>

      {showClear && (
        <Button uiVariant="filterClear" onClick={onClear}>
          <CloseCircleOutlined />
          Clear Filters
        </Button>
      )}
    </div>
  );
};

export default FilterToolbar;
