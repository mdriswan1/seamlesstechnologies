import Reveal from "../components/Reveal.jsx";
import { COMPANY } from "../data/products.js";

const REASONS = [
  {
    t: "Direct, magnetic heating",
    d: "Induction coils generate a magnetic field that heats the cookware itself — not the air around it — so energy goes straight into the food, not the kitchen.",
  },
  {
    t: "Dramatically higher efficiency",
    d: "Induction typically runs at 85–90% energy efficiency versus roughly 40% for open-flame gas, cutting fuel and utility costs across a full service.",
  },
  {
    t: "A cooler, safer kitchen",
    d: "No naked flame means lower ambient kitchen temperature, fewer burn risks, and no gas leak or flashback exposure on a busy line.",
  },
  {
    t: "Faster response, tighter control",
    d: "Power adjusts instantly — chefs get gas-like responsiveness with electric-level precision, which means less scorching and more consistent plates.",
  },
  {
    t: "Lower total cost of ownership",
    d: "Flat, sealed cooking surfaces are easier to clean and hold up to continuous multi-shift commercial use with less maintenance downtime.",
  },
  {
    t: "Built for real kitchens, not demos",
    d: "Every unit is stainless steel bodied and engineered in-house to survive the pace of a working commercial kitchen — not a showroom.",
  },
];

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow mb-2">ABOUT SEAMLESS TECHNOLOGIES</div>
            <h2 className="section-title">We build the heat behind commercial kitchens.</h2>
            <p className="section-sub" style={{ maxWidth: 720 }}>
              Seamless Technologies is a Chennai-based manufacturer of commercial induction cooking
              equipment — Chinese ranges, steamers, boiling pans, bratt pans, frying pans, flat ranges
              and hotplates — designed for hotels, cloud kitchens, catering units and institutional
              food service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark pt-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <Reveal>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    color: "var(--text-hi)",
                    textTransform: "none",
                    fontFamily: "Inter",
                    fontWeight: 800,
                    marginBottom: 6,
                  }}
                >
                  Why kitchens are moving to induction
                </h3>
              </Reveal>
              <div>
                {REASONS.map((r, i) => (
                  <Reveal key={i}>
                    <div className="reason-row">
                      <div className="reason-num">{String(i + 1).padStart(2, "0")}</div>
                      <div>
                        <h4>{r.t}</h4>
                        <p>{r.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <Reveal>
                <div className="info-strip mb-3">
                  <div className="k">Company</div>
                  <div className="v">{COMPANY.name}</div>
                </div>
                <div className="info-strip mb-3">
                  <div className="k">Registered Address</div>
                  <div className="v">
                    {COMPANY.addressLines[0]}
                    <br />
                    {COMPANY.addressLines[1]}
                  </div>
                </div>
                <div className="info-strip mb-3">
                  <div className="k">GSTIN</div>
                  <div className="v mono">{COMPANY.gstin}</div>
                </div>
                <div className="info-strip">
                  <div className="k">What we manufacture</div>
                  <div className="v" style={{ fontWeight: 500 }}>
                    Induction Chinese ranges, steamers, four-zone ranges, frying pans, flat ranges,
                    hotplates, tilting bratt pans and tilting boiling pans (direct &amp; indirect heating).
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
