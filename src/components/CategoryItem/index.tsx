import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface CategoryI {
  label: string;
}

export default function CategoryItem({ label }: CategoryI) {
  return (
    <li className="w-40 p-1.5 border rounded-md">
      <FontAwesomeIcon icon={faAsterisk} className="text-soft-pink pr-2" />
      <Link key={label} to={`categories/${label}`}>
        <span className="capitalize">{label}</span>
      </Link>
    </li>
  );
}
