


import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  //  Show loading message if products not yet loaded
  if (!products || products.length === 0) {
    return (
      <div className="mt-16">
        <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
        <p className="text-gray-500 text-sm mt-2">Loading products...</p>
      </div>
    );
  }

  //  Filter only in-stock products and show top 6
  const bestSellers = products
    .filter((product) => product?.inStock)
    .slice(0, 5);

  return (
    <div className="mt-16">
      <p className="text-2xl px-4 md:px-12 md:text-3xl font-medium">Best Sellers</p>
      <div className="flex flex-wrap gap-4 mt-4 px-4 md:px-12">
        {bestSellers.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
