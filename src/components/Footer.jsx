import { Link } from "react-router-dom";
import { RingMark } from "./icons.jsx";
import { COMPANY, waLink } from "../data/products.js";

export default function Footer() {
  return (
    <footer className="st-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="footer-brand d-flex align-items-center gap-2 mb-2">
              <RingMark className="ring-mark" style={{ width: 22, height: 22 }} /> SEAMLESS
            </div>
            <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Commercial induction cooking equipment, manufactured in Chennai.
            </p>
          </div>

          <div className="col-md-4">
            <div className="mono text-uppercase mb-2" style={{ fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.08em" }}>
              Navigate
            </div>
            <div className="d-flex flex-column gap-2">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="mono text-uppercase mb-2" style={{ fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.08em" }}>
              Contact
            </div>
            <div className="d-flex flex-column gap-2">
              <span style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>{COMPANY.addressLines[0]}</span>
              <span style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>{COMPANY.addressLines[1]}</span>
              <a
                href={waLink("Hi Seamless Technologies, I'd like to enquire about your induction equipment.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us →
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Seamless Technologies. All rights reserved.</div>
      </div>
    </footer>
  );
}
