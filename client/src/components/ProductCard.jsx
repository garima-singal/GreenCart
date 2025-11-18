

import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { currency, cartItems, addToCart, removeFromCart } = useAppContext();
  const navigate = useNavigate(); // ✅ FIXED: navigation from React Router

  // Safety check
  if (!product || !product._id) {
    console.warn("⚠️ ProductCard received invalid product:", product);
    return null;
  }

  // Get product quantity from cart
  const quantity = (cartItems && cartItems[product._id]) || 0;

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full cursor-pointer hover:shadow-md transition"
    >
      {/* Product Image */}
      <div className="group flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image?.[0]}
          alt={product.name}
        />
      </div>

      {/* Product Info */}
      <div className="text-gray-500/60 text-sm mt-2">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                className="md:w-3.5 w-3"
                alt="star"
              />
            ))}
          <p>(4)</p>
        </div>

        {/* Price + Add / Quantity */}
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-[#4fbf8b]">
            {currency}
            {product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              {currency}
              {product.price}
            </span>
          </p>

          {/* Add / Quantity Control */}
          <div
            className="text-[#4fbf8b]"
            onClick={(e) => e.stopPropagation()} // Prevents card click
          >
            {quantity === 0 ? (
              // Add button
              <button
                className="flex items-center justify-center gap-1 bg-[#44ae7c]/10 border border-[#44ae7c] md:w-20 w-16 h-[34px] rounded text-[#44ae7c] font-medium hover:bg-[#44ae7c]/20 transition"
                onClick={() => addToCart(product)}
              >
                <img src={assets.cart_icon} alt="Cart" />
                Add
              </button>
            ) : (
              // Quantity control
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-[#4fbf8b]/25 rounded select-none">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  -
                </button>
                <span className="w-5 text-center">{quantity}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

