import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/styles/Account.css";

export const peso = (n) => "₱" + n.toLocaleString("en-PH");

export const PageHead = ({ eyebrow, title, children }) => (
  <div className="acct-head">
    <div>
      <p className="acct-eyebrow">{eyebrow}</p>
      <h1 className="acct-title">{title}</h1>
    </div>
    {children}
  </div>
);

const nav = [
  { label: "Overview", to: "/account" },
  { label: "My orders", to: "/account/orders" },
  { label: "Returns & refunds", to: "/account/returns" },
  { label: "Wishlist", to: "/account/wishlist" },
  { label: "Vouchers", to: "/account/vouchers" },
  { label: "Addresses", to: "/account/addresses" },
  { label: "Payment methods", to: "/account/payments" },
  { label: "Notifications", to: "/account/notifications" },
  { label: "Settings", to: "/account/settings" },
];

const AccountLayout = () => (
  <main className="acct">
    <header className="acct-hero">
      <div className="acct-hero__user">
        <span className="acct-hero__avatar">AM</span>
        <div>
          <p className="acct-hero__tier">Mira member · Silver</p>
          <h2>Hi, Andrea.</h2>
          <p className="acct-hero__sub">Good to have you back.</p>
        </div>
      </div>
      <div className="acct-wallet">
        <div>
          <span>Mira wallet</span>
          <strong>{peso(1240)}</strong>
        </div>
        <button className="acct-wallet__btn">Top up</button>
      </div>
    </header>

    <div className="acct-body">
      <nav className="acct-nav" aria-label="Account">
        {nav.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.to === "/account"}
            className={({ isActive }) =>
              `acct-nav__link ${isActive ? "is-active" : ""}`
            }
          >
            <span>{n.label}</span>
            <span aria-hidden="true">›</span>
          </NavLink>
        ))}
      </nav>
      <section className="acct-content">
        <Outlet />
      </section>
    </div>
  </main>
);

export default AccountLayout;
