// ============================================================
// COMPANY CONFIG — edit these before you deploy
// ============================================================

// WhatsApp business number: country code + number, digits only, no + or spaces
export const WHATSAPP_NUMBER = "919486448891"; // TODO: replace with your real number

export const COMPANY = {
  name: "Seamless Technologies",
  addressLines: [
    "No.34, 1st Floor, Kattur Sadayappan Street,",
    "Periamet, Chennai - 600 003, Tamil Nadu",
  ],
  gstin: "33ADKFS3216P1ZQ",
  email: "support@seamlesstechnologies.in", // TODO: replace with your real email
  phone: "+91 94864 48891", // TODO: replace with your real phone
};

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============================================================
// PRODUCT CATALOG
// ============================================================

export const CATEGORIES = [
  {
    id: "chinese-range",
    name: "Induction Chinese Range",
    desc: "Concave wok ranges built for high-volume wok cooking — instant response, full flame-free control.",
    cols: ["Model", "Power", "Voltage", "Configuration"],
    models: [
      { model: "ICR-8KW", power: "8 kW", voltage: "415V", spec: "Single wok, 8kW concave" },
      { model: "ICRS-8KW", power: "8 kW", voltage: "415V", spec: "Single wok with soup pot" },
      { model: "MI-CDR-2X8", power: "8kW + 8kW", voltage: "415V", spec: "Double wok with soup pot" },
    ],
  },
  {
    id: "steamer",
    name: "Induction Steamer",
    desc: "Multi-tray steamers for bulk batch cooking, sized to standard 600×600 gastronorm pans.",
    cols: ["Model", "Power", "Voltage", "Dimension / Capacity"],
    models: [
      { model: "MI-IS-08", power: "12 kW", voltage: "415V", spec: "8-tray · 900×750×1845mm" },
      { model: "MI-IS-12", power: "12 kW", voltage: "415V", spec: "12-tray · 900×750×1350mm" },
    ],
  },
  {
    id: "four-zone",
    name: "Induction Four Zone Range",
    desc: "Continental-style multi-zone range for simultaneous independent cooking stations.",
    cols: ["Model", "Power", "Voltage", "Configuration"],
    models: [
      { model: "CC-4XF", power: "4 × 3.5 kW", voltage: "415V", spec: "4-zone continental range" },
    ],
  },
  {
    id: "frying-pan",
    name: "Induction Frying Pan",
    desc: "Deep induction frying pans across a full capacity range, from compact to high-volume kitchens.",
    cols: ["Model", "Power", "Voltage", "Capacity"],
    models: [
      { model: "TT / IFP-400", power: "5 kW", voltage: "220V", spec: "6.5 L" },
      { model: "IFP-500", power: "8 kW", voltage: "415V", spec: "10 L" },
      { model: "IFP-600", power: "12 kW", voltage: "415V", spec: "15 L" },
      { model: "IFP-700", power: "15 kW", voltage: "415V", spec: "32 L" },
      { model: "IFP-800", power: "20 kW", voltage: "415V", spec: "45 L" },
      { model: "IFP-900", power: "25 kW", voltage: "415V", spec: "60 L" },
      { model: "IFP-1000", power: "30 kW", voltage: "415V", spec: "90 L" },
    ],
  },
  {
    id: "flat-range",
    name: "Induction Flat Range",
    desc: "Heavy-duty flat-top ranges with large holding capacity for continuous commercial service.",
    cols: ["Model", "Power", "Voltage", "Holding Capacity"],
    models: [
      { model: "IFR-8", power: "8 kW", voltage: "440V", spec: "80 L · 650×750×600+600mm" },
      { model: "IFR-12", power: "12 kW", voltage: "440V", spec: "100 L · 650×750×600+600mm" },
      { model: "IFR-15", power: "15 kW", voltage: "440V", spec: "120 L · 650×750×600+600mm" },
    ],
  },
  {
    id: "hotplate",
    name: "Induction Hotplate",
    desc: "Flat induction hotplates in a range of plate sizes for griddle-style commercial cooking.",
    cols: ["Model", "Power", "Voltage", "Dimension"],
    models: [
      { model: "IHP-960", power: "12 kW", voltage: "440V", spec: "925 × 615 mm" },
      { model: "IHP-1260", power: "15 kW", voltage: "440V", spec: "1225 × 615 mm" },
      { model: "IHP-1275", power: "18 kW", voltage: "440V", spec: "1225 × 765 mm" },
      { model: "IHP-1560", power: "20 kW", voltage: "440V", spec: "1525 × 615 mm" },
      { model: "IHP-1575", power: "25 kW", voltage: "440V", spec: "1525 × 765 mm" },
      { model: "IHP-1875", power: "30 kW", voltage: "440V", spec: "1875 × 765 mm" },
    ],
  },
  {
    id: "bratt-pan",
    name: "Induction Tilting Bratt Pan",
    desc: "Tilting bratt pans for braising, shallow frying and bulk sauce work, with easy pour-out tilt.",
    cols: ["Model", "Power", "Voltage", "Capacity"],
    models: [
      { model: "ITBP-100", power: "12 kW", voltage: "440V", spec: "100 L" },
      { model: "ITBP-150", power: "15 kW", voltage: "440V", spec: "150 L" },
      { model: "ITBP-200", power: "20 kW", voltage: "440V", spec: "200 L" },
      { model: "ITBP-300", power: "30 kW", voltage: "440V", spec: "300 L" },
      { model: "ITBP-400", power: "40 kW", voltage: "440V", spec: "400 L" },
    ],
  },
  {
    id: "boiling-pan-direct",
    name: "Induction Tilting Boiling Pan — Direct Heating (Single Jacket)",
    desc: "Direct-heated tilting boiling pans for fast, high-volume stock, soup and sauce production.",
    cols: ["Model", "Power", "Voltage", "Capacity"],
    models: [
      { model: "BPD-100", power: "12 kW", voltage: "440V", spec: "100 L" },
      { model: "BPD-150", power: "15 kW", voltage: "440V", spec: "150 L" },
      { model: "BPD-200", power: "20 kW", voltage: "440V", spec: "200 L" },
      { model: "BPD-300", power: "30 kW", voltage: "440V", spec: "300 L" },
    ],
  },
  {
    id: "boiling-pan-indirect",
    name: "Induction Tilting Boiling Pan — Indirect Heating (Double Jacket)",
    desc: "Double-jacketed indirect heating for gentle, even simmering of delicate or dairy-based bases.",
    cols: ["Model", "Power", "Voltage", "Capacity"],
    models: [
      { model: "BPID-100", power: "12 kW", voltage: "440V", spec: "100 L" },
      { model: "BPID-150", power: "15 kW", voltage: "440V", spec: "150 L" },
      { model: "BPID-200", power: "20 kW", voltage: "440V", spec: "200 L" },
      { model: "BPID-300", power: "30 kW", voltage: "440V", spec: "300 L" },
    ],
  },
];

export const TOTAL_MODELS = CATEGORIES.reduce((n, c) => n + c.models.length, 0);
