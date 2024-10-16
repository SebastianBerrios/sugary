import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="py-2 grid justify-items-center gap-1 bg-soft-pink">
      <span className="font-bold text-xl text-white">Sugary</span>
      <div className="flex items-center gap-3">
        <a
          href="https://www.facebook.com/share/9vioy7MSYmmgYnvE/?mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
        </a>
        <a
          href="https://www.instagram.com/sugary.sg/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-white" />
        </a>
        <a
          href="https://www.tiktok.com/@sugary.sg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} className="text-white" />
        </a>
      </div>
      <p className="text-white">© Sugary 2024. Todos los derechos reservados</p>
    </footer>
  );
}
