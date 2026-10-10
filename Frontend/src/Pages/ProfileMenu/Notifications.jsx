import React, { useState } from "react";
import { PageHead } from "./AccountLayout";

const initial = [
  { id: 1, type: "Orders", title: "Your parcel is on the move", body: "CloudStep Sneakers left the Parañaque sorting center.", time: "8 min ago", unread: true },
  { id: 2, type: "Price Drops", title: "A saved item is ₱300 less", body: "Court Classic is at its lowest price in 30 days.", time: "1 hr ago", unread: true },
  { id: 3, type: "Messages", title: "Sole Studio replied", body: "Yes, size 38 is still available.", time: "Yesterday", unread: true },
  { id: 4, type: "Promotions", title: "Your ₱100 voucher expires soon", body: "Use MIRA100 before 30 June.", time: "Yesterday", unread: true },
  { id: 5, type: "System", title: "New sign-in detected", body: "Chrome on Windows, Angeles City.", time: "2 days ago", unread: false },
];
const filters = ["All", "Orders", "Promotions", "Messages", "Price Drops", "System"];

const Notifications = () => {
  const [items, setItems] = useState(initial);
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((n) => n.type === filter);

  const markAll = () => setItems((p) => p.map((n) => ({ ...n, unread: false })));
  const markOne = (id) => setItems((p) => p.map((n) => (n.id === id ? { ...n, unread: false } : n)));

  return (
    <>
      <PageHead eyebrow="Stay updated" title="Notifications" />
      <div className="acct-toolbar">
        <div className="acct-tabs">
          {filters.map((f) => (
            <button key={f} className={`acct-tab ${filter === f ? "is-active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <button className="acct-link" onClick={markAll}>Mark all as read</button>
      </div>
      <div className="acct-feed">
        {shown.length === 0 && <p className="acct-empty">You're all caught up.</p>}
        {shown.map((n) => (
          <button key={n.id} className={`acct-notif ${n.unread ? "is-unread" : ""}`} onClick={() => markOne(n.id)}>
            <span className="acct-icon acct-icon--soft" />
            <div>
              <p className="acct-tag">{n.type}</p>
              <p className="acct-row__title">{n.title}</p>
              <p className="acct-row__meta">{n.body}</p>
              <p className="acct-row__meta">{n.time}</p>
            </div>
            {n.unread && <span className="acct-dot" aria-label="Unread" />}
          </button>
        ))}
      </div>
    </>
  );
};

export default Notifications;
