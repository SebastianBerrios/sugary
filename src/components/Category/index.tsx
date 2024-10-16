import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryI {
  label: string;
  icon: IconProp;
}

export default function Category({ label, icon }: CategoryI) {
  return (
    <li className="w-40 p-1.5 border rounded-md">
      <FontAwesomeIcon icon={icon} className="text-soft-pink pr-2" />
      <a className="capitalize" href={`/${label}`}>
        {label}
      </a>
    </li>
  );
}
