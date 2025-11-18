


import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      setFilterProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilterProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 px-4 md:px-12">
      {/* Heading */}
      <div className="flex flex-col items-start w-max">
        <p className="text-2xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-[#4fbf8b] rounded-full mt-1"></div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-4 mt-6">
        {filterProducts && filterProducts.length > 0 ? (
          filterProducts
            .filter((product) => product.inStock)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
        ) : (
          <p className="text-gray-500 mt-6">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;

