import React, { useEffect, useState } from "react";
import { PageHead } from "./AccountLayout";

const accents = ["#f15b52", "#6c4cf5", "#2f6fed", "#1f9d6b", "#f08a24", "#e0508f", "#1a9a9a"];

const Settings = () => {
  const [mode, setMode] = useState(() => localStorage.getItem("mira-mode") || "light");
  const [accent, setAccent] = useState(() => localStorage.getItem("mira-accent") || "#6c4cf5");

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.setProperty("--accent", accent);
    localStorage.setItem("mira-mode", mode);
    localStorage.setItem("mira-accent", accent);
  }, [mode, accent]);

  const rows = [
    { title: "Profile information", desc: "Update your name, birthday, phone number, and profile photo.", action: "Edit profile" },
    { title: "Password & security", desc: "Last changed 4 months ago. Two-factor authentication is off.", action: "Manage security" },
    { title: "Appearance", desc: "Choose how Mira looks on this device.", custom: true },
    { title: "Language & currency", desc: "English (Philippines) · Philippine Peso (₱)", action: "Change" },
    { title: "Privacy & devices", desc: "Manage data permissions, blocked users, and 3 signed-in devices.", action: "Review" },
  ];

  return (
    <>
      <PageHead eyebrow="Account control" title="Settings" />
      <div className="acct-list">
        {rows.map((r) => (
          <div key={r.title} className="acct-card acct-row">
            <div>
              <p className="acct-row__title">{r.title}</p>
              <p className="acct-row__meta">{r.desc}</p>
            </div>
            {r.custom ? (
              <div className="acct-row__end">
                <div className="acct-seg">
                  {["light", "dark"].map((m) => (
                    <button key={m} className={mode === m ? "is-active" : ""} onClick={() => setMode(m)}>
                      {m[0].toUpperCase() + m.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="acct-swatches">
                  {accents.map((c) => (
                    <button key={c} aria-label={`Accent ${c}`} style={{ background: c }}
                      className={accent === c ? "is-active" : ""} onClick={() => setAccent(c)} />
                  ))}
                </div>
              </div>
            ) : (
              <button className="acct-btn">{r.action}</button>
            )}
          </div>
        ))}
        <div className="acct-card acct-row acct-row--danger">
          <div>
            <p className="acct-row__title">Delete account</p>
            <p className="acct-row__meta">Permanently delete your account and marketplace history.</p>
          </div>
          <button className="acct-btn">Delete account</button>
        </div>
      </div>
    </>
  );
};

export default Settings;
