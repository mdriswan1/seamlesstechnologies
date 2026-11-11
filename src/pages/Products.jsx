import Reveal from "../components/Reveal.jsx";
import { RingMark, WaIcon } from "../components/icons.jsx";
import { CATEGORIES, waLink } from "../data/products.js";

function CategoryIcon() {
  return (
    <div className="cat-icon-wrap">
      <RingMark />
    </div>
  );
}

export default function Products() {
  return (
    <>
      <section className="products-hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow mb-2">FULL CATALOG</div>
            <h2 className="section-title">Product range &amp; specifications.</h2>
            <p className="section-sub">
              Tap a category to expand full specs. Tap the WhatsApp icon on any model to enquire about that exact unit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark pt-4">
        <div className="container">
          <div className="accordion" id="catAccordion">
            {CATEGORIES.map((cat, idx) => (
              <div className="accordion-item" key={cat.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#c-${cat.id}`}
                  >
                    <span className="acc-head-row w-100">
                      <CategoryIcon />
                      {cat.name}
                      <span className="acc-count">
                        {cat.models.length} model{cat.models.length > 1 ? "s" : ""}
                      </span>
                    </span>
                  </button>
                </h2>
                <div
                  id={`c-${cat.id}`}
                  className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                  data-bs-parent="#catAccordion"
                >
                  <div className="accordion-body">
                    <p className="cat-desc">{cat.desc}</p>
                    <div className="table-responsive">
                      <table className="spec-table">
                        <thead>
                          <tr>
                            {cat.cols.map((c) => (
                              <th key={c}>{c}</th>
                            ))}
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.models.map((m) => (
                            <tr key={m.model}>
                              <td className="model">{m.model}</td>
                              <td className="figure">{m.power}</td>
                              <td className="figure">{m.voltage}</td>
                              <td>{m.spec}</td>
                              <td className="wa-cell">
                                <a
                                  className="btn-wa"
                                  href={waLink(
                                    `Hi Seamless Technologies, I'd like to enquire about the ${m.model} (${cat.name}) — ${m.power}, ${m.voltage}, ${m.spec}. Please share more details and pricing.`
                                  )}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <WaIcon /> <span className="d-none d-sm-inline">Enquire</span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
