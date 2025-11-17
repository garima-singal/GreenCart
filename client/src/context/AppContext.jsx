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

  //  ADD TO CART (Corrected)
  const addToCart = (id) => {
    const product = products.find((p) => p._id === id);

    if (!product) {
      console.warn("❌ Product not found for ID:", id);
      return;
    }

    setCartItems((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart[id] = (newCart[id] || 0) + 1;

      toast.success(`${product.name} added to cart`);
      console.log("🛒 Cart after add:", newCart);

      return newCart;
    });
  };

  //  REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems((prevCart) => {
      const newCart = structuredClone(prevCart);

      if (newCart[id]) {
        newCart[id] -= 1;
        if (newCart[id] <= 0) delete newCart[id];
      }

      toast.success("Removed from cart");
      console.log("🗑️ Cart after remove:", newCart);

      return newCart;
    });
  };
  //GET CART ITEM COUNT 
    const getCartCount = ()=>{
      let totalCount=0;
      for(const item in cartItems){
        totalCount+=cartItems[item]
      }
      return totalCount;
    }
  
  //TOTAL CART AMOUNT
     const getCartAmounnt = ()=>{
      let totalAmount = 0;
      for(const items in cartItems){
        let itemInfo = products.find((product)=>product._id === items);
        if(cartItems[Items]>0){
          totalAmount+= itemInfo.offerPrice * cartItems[items]
        }
      }
      return Math.floor(totalAmount*100)/100;
     }

  //  UPDATE CART QUANTITY
  const updateCartItem = (id, quantity) => {
    setCartItems((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart[id] = quantity;

      toast.success("Cart updated");
      console.log("🔄 Cart after update:", newCart);

      return newCart;
    });
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
    products,
    currency,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getCartAmounnt,
    getCartCount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
