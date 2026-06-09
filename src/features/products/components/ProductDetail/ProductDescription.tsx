interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Description</h2>
      <p className="text-slate-600 leading-8">{description}</p>
    </div>
  );
};

export default ProductDescription;
