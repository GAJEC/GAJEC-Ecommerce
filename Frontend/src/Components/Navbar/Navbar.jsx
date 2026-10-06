import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/mira-logo.svg";
import bell from "../../assets/images/bell.png";
import heart from "../../assets/images/heart.png";
import moon from "../../assets/images/night-mode.png";
import search from "../../assets/images/search.png";
import shoppingCart from "../../assets/images/shopping-cart.png";

import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Mira home" />
        </Link>
        <div className="search-container">
          <img src={search} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Search products, shops or categories"
          />
          <button className="search-button">→</button>
        </div>

        <nav className="navbar-actions">
          <button className="nav-icon-button">
            <img src={heart} alt="Wishlist" />
          </button>
          <button className="nav-icon-button">
            <img src={bell} alt="Notifications" />
            <span className="notification-badge">2</span>
          </button>
          <button className="nav-icon-button">
            <img src={shoppingCart} alt="Shopping Cart" />
            <span className="cart-badge">2</span>
          </button>
          <button className="nav-icon-button">
            <img src={moon} alt="Dark Mode" />
          </button>
          <ProfileMenu />
          <button className="sell-button">Start selling</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
