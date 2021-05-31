import React from "react";
import "../styles/header.css"

function Header() {
  return(
    <>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <div className="subtitle">
        <span> Sing-up for our 30-day trial.</span> <span> No credit card required.</span>
        </div>
      </header>
    </>
  );
}

export default Header