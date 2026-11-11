import { WaIcon } from "./icons.jsx";
import { waLink } from "../data/products.js";

export default function WhatsAppFab() {
  return (
    <a
      className="fab-wa"
      href={waLink("Hi Seamless Technologies, I'd like to enquire about your induction equipment.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WaIcon />
    </a>
  );
}
