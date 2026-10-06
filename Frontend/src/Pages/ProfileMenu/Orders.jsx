import React, { useState } from "react";
import { PageHead, peso } from "./AccountLayout";

const orders = [
  { id: "MR-20418", item: "CloudStep Sneakers", shop: "Sole Studio", status: "Shipped", total: 2199, date: "Jun 12" },
  { id: "MR-20377", item: "Radiance Barrier Serum", shop: "Kind Skin", status: "Delivered", total: 649, date: "Jun 2" },
  { id: "MR-20301", item: "Linen Overshirt", shop: "Habi", status: "Delivered", total: 1450, date: "May 21" },
  { id: "MR-20288", item: "Ceramic Pour-over Set", shop: "Kape Corner", status: "To ship", total: 1890, date: "May 19" },
  { id: "MR-20190", item: "Canvas Tote", shop: "Habi", status: "Cancelled", total: 520, date: "May 3" },
];
const tabs = ["All", "To ship", "Shipped", "Delivered", "Cancelled"];

const Orders = () => {
  const [tab, setTab] = useState("All");
  const shown = tab === "All" ? orders : orders.filter((o) => o.status === tab);

  return (
    <>
      <PageHead eyebrow="Purchases" title="My orders" />
      <div className="acct-tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t}
            className={`acct-tab ${tab === t ? "is-active" : ""}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="acct-list">
        {shown.length === 0 && <p className="acct-empty">No {tab.toLowerCase()} orders yet.</p>}
        {shown.map((o) => (
          <div key={o.id} className="acct-card acct-row">
            <div>
              <p className="acct-row__title">{o.item}</p>
              <p className="acct-row__meta">{o.shop} · {o.id} · {o.date}</p>
            </div>
            <div className="acct-row__end">
              <span className={`acct-badge is-${o.status.toLowerCase().replace(" ", "-")}`}>{o.status}</span>
              <strong>{peso(o.total)}</strong>
              <button className="acct-btn">{o.status === "Delivered" ? "Buy again" : "Track"}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
