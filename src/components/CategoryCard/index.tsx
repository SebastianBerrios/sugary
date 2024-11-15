import { useContext } from "react";
import { CategoryContext } from "../../contexts/Category";
import { Link } from "react-router-dom";

export default function CategoryCard() {
  const category = useContext(CategoryContext);
  const categories = category.category;

  return (
    <>
      <div className="mb-10 flex justify-center gap-6">
        {categories.map((category) => (
          <Link key={category.id} to={`/${category.name}`}>
            <div>
              <img
                className="w-60 h-auto"
                src={category.image}
                alt={`${category.name}`}
              />
              <h3 className="text-center uppercase font-bold">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
