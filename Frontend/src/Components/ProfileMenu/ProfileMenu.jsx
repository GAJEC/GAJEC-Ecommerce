import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileMenu.css";

const user = {
  initials: "AM",
  name: "Andrea Mendoza",
  email: "andrea@email.com",
};

const menuItems = [
  { label: "Overview", to: "/account" },
  { label: "My orders", to: "/account/orders" },
  { label: "Returns & refunds", to: "/account/returns" },
  { label: "Wishlist", to: "/account/wishlist" },
  { label: "Vouchers", to: "/account/vouchers" },
  { label: "Addresses", to: "/account/addresses" },
  { label: "Payment methods", to: "/account/payments" },
  { label: "Settings", to: "/account/settings" },
];

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSignOut = () => {
    setOpen(false);
  };

  return (
    <div className="profile-menu" ref={wrapperRef}>
      <button
        className={`profile-button ${open ? "is-open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {user.initials}
      </button>

      {open && (
        <div className="profile-menu__panel" role="menu">
          <div className="profile-menu__header">
            <span className="profile-menu__avatar">{user.initials}</span>
            <div>
              <p className="profile-menu__name">{user.name}</p>
              <p className="profile-menu__email">{user.email}</p>
            </div>
          </div>

          <ul className="profile-menu__list">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="profile-menu__item"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="profile-menu__chevron">›</span>
                </Link>
              </li>
            ))}
          </ul>

          <button className="profile-menu__signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;