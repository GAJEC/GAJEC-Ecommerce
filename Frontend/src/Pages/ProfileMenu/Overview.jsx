import React from "react";
import { Link } from "react-router-dom";
import { PageHead, peso } from "./AccountLayout";

const stats = [
  { label: "Orders in progress", value: 1, to: "/account/orders" },
  { label: "Available vouchers", value: 8, to: "/account/vouchers" },
  { label: "Saved items", value: 2, to: "/account/wishlist" },
  { label: "Wallet balance", value: peso(1240), to: "/account/payments" },
];

const recent = [
  { id: "MR-20418", item: "CloudStep Sneakers", status: "Shipped", total: 2199, date: "Jun 12" },
  { id: "MR-20377", item: "Radiance Barrier Serum", status: "Delivered", total: 649, date: "Jun 2" },
];

const Overview = () => (
  <>
    <PageHead eyebrow="Your account" title="Overview" />
    <div className="acct-stats">
      {stats.map((s) => (
        <Link key={s.label} to={s.to} className="acct-card acct-stat">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </Link>
      ))}
    </div>

    <div className="acct-subhead">
      <h3>Recent orders</h3>
      <Link to="/account/orders" className="acct-link">View all</Link>
    </div>
    <div className="acct-list">
      {recent.map((o) => (
        <div key={o.id} className="acct-card acct-row">
          <div>
            <p className="acct-row__title">{o.item}</p>
            <p className="acct-row__meta">{o.id} · {o.date}</p>
          </div>
          <div className="acct-row__end">
            <span className={`acct-badge is-${o.status.toLowerCase()}`}>{o.status}</span>
            <strong>{peso(o.total)}</strong>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Overview;
