import React, { useState } from "react";

export default function Panel({ title, children, isActive, onShow }) {
  // if you use local state version, remove isActive/onShow and use local state instead.
  return (
    <div style={{marginBottom:10}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <strong>{title}</strong>
        <button onClick={onShow}>{isActive ? "Hide" : "Show"}</button>
      </div>
      {isActive && <div style={{padding:8}}>{children}</div>}
    </div>
  );
}
