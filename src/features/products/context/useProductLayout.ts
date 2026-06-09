import { useContext } from "react";
import { ProductLayoutContext } from "./ProductLayoutContext";

export const useProductLayout = () => {
  const context = useContext(ProductLayoutContext);
  if (!context) {
    throw new Error(
      "useProductLayout must be used inside ProductLayoutProvider",
    );
  }
  return context;
};
