import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCake,
  faCandyCane,
  faCheese,
  faDrumstickBite,
  faIceCream,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import CategoryItem from "../CategoryItem";

export default function OurCategories() {
  return (
    <div className="hidden md:block relative group">
      <div className="flex items-center gap-2 py-3 pl-10 pr-20 rounded-full bg-soft-pink text-white cursor-pointer">
        <FontAwesomeIcon icon={faBars} />
        <p>NUESTRAS CATEGORÍAS</p>
      </div>
      <div className="invisible absolute group-hover:visible">
        <ul className="w-max grid grid-cols-2 gap-3 justify-items-start items-center bg-white p-4 border rounded-lg shadow-basic">
          <CategoryItem label="tortas" icon={faCake} />
          <CategoryItem label="cheesecakes" icon={faCheese} />
          <CategoryItem label="postres" icon={faIceCream} />
          <CategoryItem label="tablas de queso" icon={faUtensils} />
          <CategoryItem label="dulce" icon={faCandyCane} />
          <CategoryItem label="salado" icon={faDrumstickBite} />
        </ul>
      </div>
    </div>
  );
}
