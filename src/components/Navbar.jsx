import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RingMark, WaIcon } from "./icons.jsx";
import { waLink } from "../data/products.js";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`st-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          <Link to="/" className="st-brand" onClick={() => setOpen(false)}>
            <RingMark className="ring-mark" />
            SEAMLESS
          </Link>

          <button
            className="navbar-toggler d-lg-none border-0 text-light"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          <div className="d-none d-lg-flex align-items-center gap-4">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `st-nav-link${isActive ? " active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              className="btn-wa"
              href={waLink("Hi Seamless Technologies, I'd like to enquire about your induction equipment range.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIcon /> Enquire
            </a>
          </div>
        </div>

        {open && (
          <div className="d-lg-none pb-3">
            <div className="d-flex flex-column gap-3">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `st-nav-link text-start${isActive ? " active" : ""}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                className="btn-wa justify-content-center"
                href={waLink("Hi Seamless Technologies, I'd like to enquire about your induction equipment range.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
