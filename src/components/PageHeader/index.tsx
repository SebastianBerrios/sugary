import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.webp";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";

export default function PageHeader() {
  return (
    <header>
      <div className="my-3 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="size-12 md:size-20 rounded-full"
          />
          <span className="hidden md:block text-soft-pink font-bold text-3xl">
            Sugary
          </span>
        </div>
        <SearchBar />
        <FontAwesomeIcon icon={faCartShopping} className="size-7" />
      </div>
      <NavBar />
    </header>
  );
}
