import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from 'react-hot-toast'
export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {

  const currency = import.meta.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user , setUser] = useState(false)
  const [isSeller , setIsSeller] = useState(false)
  const [showUserLogin, setShowUserLogin] = useState(false)
  const [products , setProducts] = useState([])
  
  const [cartItems , setCartItems] = useState({})
//fetch all products
  const fetchProducts = async()=>{
    setProducts(dummyProducts)
  }

// //add product to card
//  const addToCart = ()=>{
//    let cartData = structuredClone(cartItems);
//    if(cartData[itemID]){
//     cartData[itemID]+=1;
//    }else{
//        cartData[itemID]=1;
//    }
//    setCartItems(cartData);
//    toast.success("Added to cart");
//  }

// //update cart item quantity

// const updateCartItem = (itemID , quantity)=>{
//     let cartData = structuredClone(cartItems);
//     cartData[itemID] = quantity;
//     setCartItems(cartData);
//     toast.success("Cart Updated");
// }


// //remove from cart
// const removeFromCart = (itemID)=>{
//   let cartData = structuredClone(cartItems);
//   if(cartData[itemID]){
//     cartData[itemID]-=1;
//     if(cartData[itemID]===0){
//       delete cartData[itemID];
//     }
//   }
//   toast.success("Removed from cart")
//   setCartItems(cartData);
// }

// ✅ Add product to cart
const addToCart = (product) => {
  if (!product || !product._id) {
    console.warn("⚠️ Invalid product passed to addToCart:", product);
    return;
  }

  setCartItems((prevCart) => {
  const newCart = structuredClone(prevCart);
  const itemID = product._id;
  newCart[itemID] = (newCart[itemID] || 0) + 1;
  return newCart;
});


  // setCartItems((prevCart) => {
  //   const newCart = structuredClone(prevCart);
  //   const itemID = product._id;

  //   if (newCart[itemID]) {
  //     newCart[itemID] += 1;
  //   } else {
  //     newCart[itemID] = 1;
  //   }

    toast.success(`${product.name} added to cart`);
    console.log("🛒 Cart after add:", newCart);
   return newCart;

};

// ✅ Remove product from cart
const removeFromCart = (itemID) => {
  setCartItems((prevCart) => {
    const newCart = structuredClone(prevCart);
    if (newCart[itemID]) {
      newCart[itemID] -= 1;
      if (newCart[itemID] <= 0) {
        delete newCart[itemID];
      }
    }
    toast.success("Removed from cart");
    console.log("🗑️ Cart after remove:", newCart);
    return newCart;
  });
};

// ✅ Update cart quantity manually (optional)
const updateCartItem = (itemID, quantity) => {
  setCartItems((prevCart) => {
    const newCart = structuredClone(prevCart);
    newCart[itemID] = quantity;
    toast.success("Cart updated");
    console.log("🔄 Cart after update:", newCart);
    return newCart;
  });
};


  useEffect(() => {
    fetchProducts()
  }, []);

 
    const value = {
       navigate , 
       user ,
       setUser ,
       isSeller ,
       setIsSeller ,
       showUserLogin ,
       setShowUserLogin ,
       products ,
       currency ,
       cartItems,
       addToCart , 
       updateCartItem ,
       removeFromCart
      };
 return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () =>{
    return useContext(AppContext)
}
