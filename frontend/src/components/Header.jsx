import './Header.css'
import { CiShoppingCart, CiHeart  } from "react-icons/ci";
import { useState } from 'react';
// import {Link, Outlet} from 'react-router-dom'

function Header() {
  const [cart,setCart] =useState(0);
  const [fav,setFav] =useState(0);

  return (
    <div className="all-header">
          <div className="logo">
            <h3>Coffee Shop</h3>
          </div>
          <div className="links">
              <p>Home</p>
            <a href="/products"><p>Products</p></a>
      
          </div>
          <div className="options">
           <a href="/cart"> <button>
                <CiShoppingCart/>
                <div className='num'>
                      <span>{cart}</span>
                    </div>
                </button></a>
            <button>
                <CiHeart/>
                <div className='num'>
                      <span>{fav}</span>
                    </div>
                </button>
          </div>
    </div>

  )
}
export default Header