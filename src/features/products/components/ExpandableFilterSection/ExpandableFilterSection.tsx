import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import type { ExpandableFilterSectionProps } from "./ExpandableFilterSection.types";

const ExpandableFilterSection = <T,>({
  items,
  renderItem,
  limit = 5,
}: ExpandableFilterSectionProps<T>) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, limit);

  return (
    <>
      <div className="space-y-3">{visibleItems.map(renderItem)}</div>

      {items.length > limit && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="
            mt-4
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-slate-600
            hover:text-slate-900
            transition
          "
        >
          {showAll ? (
            <>
              Show Less
              <UpOutlined />
            </>
          ) : (
            <>
              Show More
              <DownOutlined />
            </>
          )}
        </button>
      )}
    </>
  );
};

export default ExpandableFilterSection;
