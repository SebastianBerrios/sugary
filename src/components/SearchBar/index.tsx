import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div className="relative flex items-center">
      <FontAwesomeIcon icon={faSearch} className="absolute left-3" />
      <input
        type="search"
        placeholder="Busca tu postre..."
        className="py-3 px-10 md:w-80 lg:w-96 rounded-full bg-soft-gray border-transparent focus:bg-soft-gray"
      />
    </div>
  );
}
