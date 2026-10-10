import React from "react";
import { PageHead, peso } from "./AccountLayout";

const returns = [
  { id: "RT-1042", item: "Linen Overshirt", reason: "Wrong size", status: "Refunded", amount: 1450, date: "May 28" },
  { id: "RT-1051", item: "Radiance Barrier Serum", reason: "Damaged on arrival", status: "In review", amount: 649, date: "Jun 5" },
];

const Returns = () => (
  <>
    <PageHead eyebrow="After-sales" title="Returns & refunds">
      <button className="acct-btn acct-btn--primary">Start a return</button>
    </PageHead>
    <p className="acct-note">You can request a return within 7 days of delivery.</p>
    <div className="acct-list">
      {returns.map((r) => (
        <div key={r.id} className="acct-card acct-row">
          <div>
            <p className="acct-row__title">{r.item}</p>
            <p className="acct-row__meta">{r.id} · {r.reason} · {r.date}</p>
          </div>
          <div className="acct-row__end">
            <span className={`acct-badge is-${r.status.toLowerCase().replace(" ", "-")}`}>{r.status}</span>
            <strong>{peso(r.amount)}</strong>
            <button className="acct-btn">Details</button>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Returns;
