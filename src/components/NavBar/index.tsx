import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faKitchenSet,
} from "@fortawesome/free-solid-svg-icons";
import lettersugary from "../../assets/files/sugary.pdf";
import OurCategories from "../OurCategories";

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center py-2 border-y">
      <OurCategories />
      <ul className="flex gap-8 justify-center items-center">
        <li>
          <a
            className="flex gap-1 items-center justify-center py-1 border-b-2 border-transparent hover:border-soft-pink transition-all duration-300"
            href="#home"
          >
            <FontAwesomeIcon icon={faHome} className="text-soft-pink" />
            Inicio
          </a>
        </li>
        <li>
          <a
            className="flex gap-1 items-center justify-center py-1 border-b-2 border-transparent hover:border-soft-pink transition-all duration-300"
            href="#aboutus"
          >
            <FontAwesomeIcon icon={faCoffee} className="text-soft-pink" />
            Nosotros
          </a>
        </li>
        <li>
          <a
            className="flex gap-1 items-center justify-center py-1 border-b-2 border-transparent hover:border-soft-pink transition-all duration-300"
            href={lettersugary}
            download="Sugary"
          >
            <FontAwesomeIcon icon={faKitchenSet} className="text-soft-pink" />
            Carta
          </a>
        </li>
      </ul>
    </nav>
  );
}
