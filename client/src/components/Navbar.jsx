import React, { useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin , setSearchQuery , searchQuery } = useAppContext();
  const navigate = useNavigate();

 const logout = async () => {
  setUser(null);
  navigate('/');
};

useEffect(()=>{
  if(searchQuery.length>0){
    navigate("/products")
  }
},[searchQuery])


  return (
    <nav className="flex items-center justify-between px-8 md:px-24 lg:px-32 xl:px-40 py-6 border-b border-gray-300 bg-white relative transition-all">
      {/* LOGO */}
      <NavLink to='/' onClick={()=>setOpen(false)}>
        <img className='h-9' src={assets.logo} alt="LOGO" />
      </NavLink>

      {/* DESKTOP MENU */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/products'>ALL PRODUCTS</NavLink>
        {user && <NavLink to='/orders'>MY ORDERS</NavLink>}
        <NavLink to='/contact'>CONTACT</NavLink>

        {/* SEARCH BAR */}
        <div className="hidden lg:flex items-center text-medium gap-2 border border-gray-300 px-3 rounded-full">
         <input
  onChange={(e) => setSearchQuery(e.target.value)}
  className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
  type="text"
  placeholder="Search products"
/>

          <img src={assets.search_icon} alt="search" className='w-4 h-4' />
        </div>

        {/* CART ICON */}
        <div onClick={()=>navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="Cart" className='w-6 opacity-80' />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#4fbf8b] w-[18px] h-[18px] rounded-full">3</button>
        </div>

        {/* LOGIN / LOGOUT */}
        {!user ? (
          <button
            className="cursor-pointer px-8 py-2 transition text-white rounded-full"
            style={{ backgroundColor: "#4fbf8b" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#44ae7c")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4fbf8b")}
            onClick={() => setShowUserLogin(true)}
          >
            Login
          </button>
        ) : (
        
         <div className='relative group'> 
            <img src ={assets.profile_icon} alt ="Profile" className='w-10' />
            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
               <li onClick={()=>navigate("my-orders")} className='p-1.5 pl-3 hover:bg-[#44ae7c]/10 cursor-pointer '>My Orders</li>
               <li onClick={logout} className='p-1.5 pl-3 hover:bg-[#44ae7c]/10 cursor-pointer '>   LogOut</li>
            </ul>
          </div>
        )}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-2 px-5 text-sm md:hidden">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
          {user && <NavLink to="/orders" onClick={() => setOpen(false)}>My Orders</NavLink>}
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-white rounded-full text-sm"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
