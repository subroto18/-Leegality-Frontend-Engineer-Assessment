const FilterLoading = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>

      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="
                    h-10
                    rounded-md
                    bg-slate-200
                    animate-pulse
                  "
          />
        ))}
      </div>
    </div>
  );
};

export default FilterLoading;
