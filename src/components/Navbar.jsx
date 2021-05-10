import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSpeedometer } from "react-icons/gi";

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='navbar__logo'>
          <span className='navbar__logo--icon'>
            <GiSpeedometer />
          </span>
          <span className='navbar__logo--text'>SpeedCart</span>
        </div>

        <div className='navbar__cart'>
          <div className='navbar__cart--icon'>
            <span>
              <AiOutlineShoppingCart />
            </span>
            <span className='navbar__cart--count'>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
