import React, { useContext, useEffect } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './footerr/Footer';
import { ShopContext } from '../Components/Context/ShopContext'
import Cart from '../pages/Cart';


function Layout() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const {setIsCartOpen , isCartOpen} = useContext(ShopContext);
  return (
    <>
    <Header openCart={()=>setIsCartOpen(true)}/>
    <Outlet/>
    <Footer/>
    <Cart isOpen={isCartOpen} closeCart={() => setIsCartOpen(false)}/>
    </>
  )
}

export default Layout