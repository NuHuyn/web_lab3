import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card" style={{border: "1px solid #ddd", padding: 12, borderRadius:8}}>
      <h3>{title}</h3>
      <hr />
      {children}
    </div>
  );
}
