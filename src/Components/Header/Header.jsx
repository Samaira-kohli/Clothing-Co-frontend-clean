import React, { useContext } from 'react';
import './Header.css';
import cart from "../../assets/Frontend_Assets/cart_icon.png";
import { Link, NavLink } from 'react-router-dom';
import { User } from 'lucide-react';
import { ShopContext } from '../../Components/Context/ShopContext'

function Header(props) {
  const {quantity}= useContext(ShopContext)
  return (
    <>
      {/* <div className="discount">Use code CHIC15 for an exclusive extra 15% off!</div> */}
      <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          {/* <img src={logo} alt="Clothing Logo" /> */}
          <p>Clothing Co.</p>
        </div>

        {/* Menu */}
        <ul className="nav-menu">
          <li><NavLink to="/" className={({isActive})=>(isActive?'active':'text-[#696969]')}>Shop</NavLink></li>
          <li><NavLink to="/men" className={({isActive})=>(isActive?'active':'text-[#696969]')}>Men</NavLink></li>
          <li><NavLink to="/women" className={({isActive})=>(isActive?'active':'text-[#696969]')}>Women</NavLink></li>
          {/* <li><NavLink to="/kids" className={({isActive})=>(isActive?'active':'text-[#4d4949]')}>Kids</NavLink></li> */}
        </ul>

        {/* Login and Cart */}
        <div className="nav-login-cart">
          <Link to="/Login"><button aria-label='Login'><User /></button></Link>
          <img src={cart} alt="Cart Icon" onClick={props.openCart}/>
          <div className="cart-counter">{quantity}</div>
        </div>
      </nav>
    </>
  );
}

export default Header;

