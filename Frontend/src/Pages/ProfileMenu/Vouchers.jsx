import React, { useState } from "react";
import { PageHead } from "./AccountLayout";

const vouchers = [
  { code: "MIRA100", tag: "Platform", title: "₱100 OFF", rule: "Min. spend ₱999", until: "30 June", state: "available" },
  { code: "STYLE10", tag: "Fashion", title: "10% OFF", rule: "Capped at ₱250", until: "30 June", state: "available" },
  { code: "SHIPFREE", tag: "Delivery", title: "FREE SHIP", rule: "No minimum spend", until: "30 June", state: "available" },
  { code: "SOLE150", tag: "Shop", title: "₱150 OFF", rule: "Sole Studio orders", until: "30 June", state: "available" },
  { code: "WELCOME50", tag: "Platform", title: "₱50 OFF", rule: "First order", until: "", state: "used" },
  { code: "MAYSALE", tag: "Platform", title: "15% OFF", rule: "Capped at ₱300", until: "31 May", state: "expired" },
];

const Vouchers = () => {
  const [tab, setTab] = useState("available");
  const [copied, setCopied] = useState("");
  const shown = vouchers.filter((v) => v.state === tab);
  const count = (s) => vouchers.filter((v) => v.state === s).length;

  const copy = async (code) => {
    try { await navigator.clipboard.writeText(code); } catch { /* ignore */ }
    setCopied(code);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <>
      <PageHead eyebrow="Mira perks" title="Your vouchers" />
      <div className="acct-tabs acct-tabs--line">
        {["available", "used", "expired"].map((t) => (
          <button key={t} className={`acct-tab ${tab === t ? "is-active" : ""}`} onClick={() => setTab(t)}>
            {t[0].toUpperCase() + t.slice(1)}{t === "available" ? ` (${count(t)})` : ""}
          </button>
        ))}
      </div>
      <div className="acct-grid">
        {shown.length === 0 && <p className="acct-empty">No {tab} vouchers.</p>}
        {shown.map((v) => (
          <div key={v.code} className={`acct-voucher ${v.state !== "available" ? "is-muted" : ""}`}>
            <div className="acct-voucher__left">
              <small>{v.tag}</small>
              <strong>{v.title}</strong>
              <small>{v.rule}</small>
            </div>
            <div className="acct-voucher__right">
              <code>{v.code}</code>
              {v.state === "available" && (
                <button className="acct-chip" onClick={() => copy(v.code)}>
                  {copied === v.code ? "Copied" : "Copy"}
                </button>
              )}
              {v.until && <small>Valid until {v.until}</small>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Vouchers;
