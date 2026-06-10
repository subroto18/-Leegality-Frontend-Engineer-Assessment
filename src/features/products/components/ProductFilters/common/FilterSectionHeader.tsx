import { CloseCircleOutlined } from "@ant-design/icons";
import Button from "@/components/ui/Button";

interface FilterSectionHeaderProps {
  title: string;
  count?: number;
  showClear?: boolean;
  onClear?: () => void;
}

const FilterSectionHeader = ({
  title,
  count,
  showClear,
  onClear,
}: FilterSectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-slate-800 text-lg">{title}</h3>

        {!!count && (
          <span
            className="
              min-w-6
              h-6
              px-2
              rounded-full
              bg-primary/10
              text-primary
              text-xs
              font-medium
              flex
              items-center
              justify-center
            "
          >
            {count}
          </span>
        )}
      </div>

      {showClear && (
        <Button uiVariant="filterClear" onClick={onClear} className="group">
          <CloseCircleOutlined
            className="
              transition-transform
              duration-200
              group-hover:rotate-90
            "
          />

          <span>Clear</span>
        </Button>
      )}
    </div>
  );
};

export default FilterSectionHeader;
