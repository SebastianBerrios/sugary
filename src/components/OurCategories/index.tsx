import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CategoryItem from "../CategoryItem";
import { useContext } from "react";
import { CategoryContext } from "../../contexts/Category";

export default function OurCategories() {
  const { category } = useContext(CategoryContext);

  return (
    <div className="hidden md:block relative group">
      <div className="flex items-center gap-2 py-3 pl-10 pr-20 rounded-full bg-soft-pink text-white cursor-pointer">
        <FontAwesomeIcon icon={faBars} />
        <p>NUESTRAS CATEGORÍAS</p>
      </div>
      <div className="invisible absolute group-hover:visible">
        <ul className="w-max grid grid-cols-2 gap-3 justify-items-start items-center bg-white p-4 border rounded-lg shadow-basic">
          {category.map((cat) => (
            <CategoryItem key={cat.id} label={cat.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
