
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.VITE_CURRENCY;
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});
  const [cartItems, setCartItems] = useState({});

  // FETCH ALL PRODUCTS
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  //  ADD TO CART
  const addToCart = (id) => {
    const product = products.find((p) => p._id === id);

    if (!product) {
      console.warn("Product not found:", id);
      return;
    }

    setCartItems((prev) => {
      const updated = { ...prev };
      updated[id] = (updated[id] || 0) + 1;

      toast.success(`${product.name} added to cart`);
      return updated;
    });
  };

  //  REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }

      toast.success("Item removed from cart");
      return updated;
    });
  };

  //  UPDATE CART ITEM QUANTITY
  const updateCartItem = (id, qty) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: qty,
    }));
  };

  //  GET TOTAL CART COUNT
  const getCartCount = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  //  GET TOTAL CART AMOUNT
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const id in cartItems) {
      const product = products.find((p) => p._id === id);

      if (product) {
        totalAmount += product.offerPrice * cartItems[id];
      }
    }

    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,

    // products & search
    products,
    currency,
    searchQuery,
    setSearchQuery,

    // cart
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getCartCount,
    getCartAmount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
