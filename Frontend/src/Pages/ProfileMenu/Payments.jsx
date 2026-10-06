import React, { useState } from "react";
import { PageHead } from "./AccountLayout";

const initial = [
  { id: 1, icon: "V", name: "Visa · •••• 4821", note: "Expires 08/28", isDefault: true },
  { id: 2, icon: "G", name: "GCash · •••• ••• 0142", note: "Andrea M.", isDefault: false },
  { id: 3, icon: "M", name: "Maya · •••• ••• 7820", note: "Verified wallet", isDefault: false },
];

const Payments = () => {
  const [list, setList] = useState(initial);
  const setDefault = (id) => setList((p) => p.map((m) => ({ ...m, isDefault: m.id === id })));
  const remove = (id) => setList((p) => p.filter((m) => m.id !== id));

  return (
    <>
      <PageHead eyebrow="Secure payments" title="Payment methods">
        <button className="acct-btn acct-btn--primary">+ Add payment</button>
      </PageHead>
      <p className="acct-note">Your saved details are encrypted and masked.</p>
      <div className="acct-list">
        {list.length === 0 && <p className="acct-empty">No payment methods saved. Add one to check out faster.</p>}
        {list.map((m) => (
          <div key={m.id} className="acct-card acct-row">
            <div className="acct-row__lead">
              <span className="acct-icon">{m.icon}</span>
              <div>
                <p className="acct-row__title">{m.name}</p>
                <p className="acct-row__meta">{m.note}{m.isDefault && " · Default"}</p>
              </div>
            </div>
            <div className="acct-row__end">
              {!m.isDefault && <button className="acct-link" onClick={() => setDefault(m.id)}>Set default</button>}
              <button className="acct-link acct-link--danger" onClick={() => remove(m.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="acct-success">✓ Mira never stores full card numbers or security codes.</div>
    </>
  );
};

export default Payments;
