import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { WaIcon, Bolt, Leaf, Shield, Gauge, Steel, Wrench, RingMark } from "../components/icons.jsx";
import { CATEGORIES, TOTAL_MODELS, waLink } from "../data/products.js";

const WHY_CARDS = [
  { Icon: Bolt, title: "Instant, precise heat", body: "Magnetic induction heats the pan directly — response is immediate, and temperature holds exactly where you set it." },
  { Icon: Leaf, title: "Up to 90% efficiency", body: "Far less wasted heat than gas, which means lower running costs across a full service." },
  { Icon: Shield, title: "No open flame", body: "Cooler surrounding air, cooler surfaces, and a meaningfully safer kitchen floor." },
  { Icon: Gauge, title: "Consistent output", body: "Even, repeatable heating reduces scorching and food loss across long service runs." },
  { Icon: Steel, title: "Commercial-grade steel", body: "Stainless steel bodies built for continuous multi-shift use, not domestic duty cycles." },
  { Icon: Wrench, title: "Built to be serviced", body: "Modular components and accessible panels keep downtime short when service is needed." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-rings">
          <div className="ring"></div>
          <div className="ring r2"></div>
          <div className="ring r3"></div>
          <div className="ring r4"></div>
          <div className="ring-core"></div>
        </div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-8">
              <div className="eyebrow mb-3">COMMERCIAL INDUCTION EQUIPMENT · CHENNAI</div>
              <h1>
                THE FLAME IS GONE.
                <br />
                <span className="grad">THE HEAT REMAINS.</span>
              </h1>
              <p className="lead">
                Seamless Technologies builds stainless-steel induction ranges, boiling pans, fryers,
                steamers and hotplates for commercial kitchens — faster to heat, cooler to work beside,
                and safer than open-flame gas.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link className="btn-heat" to="/products">
                  View Products
                </Link>
                <a
                  className="btn-outline-steel d-inline-flex align-items-center gap-2"
                  href={waLink("Hi Seamless Technologies, I'd like to enquire about your induction equipment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon style={{ width: 16, height: 16, color: "#25d366" }} /> Enquire on WhatsApp
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="num">{TOTAL_MODELS}+</div>
                  <div className="lbl">Models in range</div>
                </div>
                <div className="hero-stat">
                  <div className="num">{CATEGORIES.length}</div>
                  <div className="lbl">Product categories</div>
                </div>
                <div className="hero-stat">
                  <div className="num">5–40kW</div>
                  <div className="lbl">Power span</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INDUCTION */}
      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow mb-2">WHY INDUCTION</div>
            <h2 className="section-title">Every reason to leave gas behind.</h2>
            <p className="section-sub">
              Built for kitchens that run all day — every category is engineered around heat, safety and uptime.
            </p>
          </Reveal>
          <div className="row g-4 mt-2">
            {WHY_CARDS.map((c, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <Reveal>
                  <div className="why-card">
                    <c.Icon className="glyph" />
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORY TEASER */}
      <section className="section section-panel">
        <div className="container">
          <Reveal>
            <div className="eyebrow mb-2">THE RANGE</div>
            <h2 className="section-title">Nine categories. One heat source.</h2>
            <p className="section-sub">
              From wok ranges to 400-litre tilting boiling pans — tap any category to see full specs and enquire directly.
            </p>
          </Reveal>
          <div className="row g-3 mt-2">
            {CATEGORIES.map((cat) => (
              <div className="col-6 col-md-4 col-lg-3" key={cat.id}>
                <Reveal>
                  <Link to="/products" className="cat-chip text-decoration-none">
                    <RingMark className="ring-mark" />
                    <span>{cat.name}</span>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal>
            <div className="mt-4">
              <Link className="btn-heat" to="/products">
                See full spec sheet →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div className="cta-strip p-4 p-md-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
              <div>
                <h3 style={{ fontSize: "1.6rem", color: "var(--text-hi)" }}>Fitting out a commercial kitchen?</h3>
                <p className="mb-0 mt-1" style={{ color: "var(--text-mid)" }}>
                  Send us your requirement on WhatsApp — we'll get back with specs and pricing.
                </p>
              </div>
              <a
                className="btn-wa px-4 py-3"
                style={{ fontSize: "0.95rem" }}
                href={waLink("Hi Seamless Technologies, I'm fitting out a commercial kitchen and would like a quote for induction equipment.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
