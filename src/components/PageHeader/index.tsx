import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.webp";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import { useContext } from "react";
import { DessertContext } from "../../contexts/Desserts";
import { Link } from "react-router-dom";

export default function PageHeader() {
  const dessert = useContext(DessertContext);

  return (
    <header>
      <div className="my-3 flex justify-around items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="size-12 md:size-20 rounded-full"
          />
          <p className="hidden md:block text-soft-pink font-bold text-3xl">
            Sugary
          </p>
        </Link>
        <div></div>
        <SearchBar />
        <div>
          <span>{dessert.countShoppingCart}</span>
          <FontAwesomeIcon icon={faCartShopping} className="size-7" />
        </div>
      </div>
      <NavBar />
    </header>
  );
}
