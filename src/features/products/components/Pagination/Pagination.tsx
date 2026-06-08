const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button className="border rounded-md px-4 py-2">Left</button>

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`h-10 w-10 rounded-md border ${
            page === 1 ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="border rounded-md px-4 py-2">Right</button>
    </div>
  );
};

export default Pagination;
