import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { WaIcon } from "../components/icons.jsx";
import { COMPANY, WHATSAPP_NUMBER, waLink } from "../data/products.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const message = `Hi Seamless Technologies, my name is ${form.name || "___"}.\nPhone: ${
    form.phone || "___"
  }\nRequirement: ${form.requirement || "___"}`;

  return (
    <section className="section section-dark" style={{ paddingTop: 60 }}>
      <div className="container">
        <Reveal>
          <div className="eyebrow mb-2">GET IN TOUCH</div>
          <h2 className="section-title">Tell us what you're building.</h2>
          <p className="section-sub">
            Fill in a few details and send it straight to our WhatsApp — or reach us directly below.
          </p>
        </Reveal>

        <div className="row g-4 mt-3">
          <div className="col-lg-7">
            <Reveal>
              <div className="contact-card">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="e.g. Arun Kumar"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone number</label>
                    <input
                      className="form-control"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="e.g. 98765 43210"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">What do you need?</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="requirement"
                      value={form.requirement}
                      onChange={onChange}
                      placeholder="e.g. 2 Induction Chinese Ranges + 1 Tilting Boiling Pan for a new cloud kitchen"
                    ></textarea>
                  </div>
                </div>

                <a
                  className="btn-wa mt-4 justify-content-center w-100 py-3"
                  style={{ fontSize: "0.95rem" }}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon /> Send via WhatsApp
                </a>
                <div className="contact-note">
                  This opens WhatsApp with your details pre-filled — nothing is sent until you hit send there.
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal>
              <div className="info-strip mb-3">
                <div className="k">Address</div>
                <div className="v">
                  {COMPANY.addressLines[0]}
                  <br />
                  {COMPANY.addressLines[1]}
                </div>
              </div>
              <div className="info-strip mb-3">
                <div className="k">Phone</div>
                <div className="v mono">{COMPANY.phone}</div>
              </div>
              <div className="info-strip mb-3">
                <div className="k">Email</div>
                <div className="v mono">{COMPANY.email}</div>
              </div>
              <div className="info-strip">
                <div className="k">WhatsApp</div>
                <a
                  className="btn-wa mt-2"
                  href={waLink("Hi Seamless Technologies, I'd like to enquire about your induction equipment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon /> Start chat
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
