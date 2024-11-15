import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoryContext } from "../../contexts/Category";
import { DessertContext } from "../../contexts/Desserts";
import DessertCard from "../../components/DessertCard";

export default function CategoryDetail() {
  const { category } = useContext(CategoryContext);
  const { dessert } = useContext(DessertContext);

  const { categoryId } = useParams<{ categoryId: string }>();

  const categoryInfo = category.find(
    (category: { name: string }) => category.name === categoryId
  );

  const desserts = dessert.filter(
    (dessert: { category: string }) => dessert.category === categoryId
  );

  return (
    <>
      <h1 className="capitalize py-11 my-6 text-center text-2xl bg-[#CAD593]">
        {categoryInfo?.name}
      </h1>
      <aside>
        <div>
          <span>Sabor</span>
        </div>
        <div>
          <span>Precio</span>
        </div>
      </aside>
      <section className="flex gap-5 mx-4">
        {desserts.map((dessert: any) => (
          <Link key={dessert.id} to={`/${dessert.name}`}>
            <DessertCard
              id={dessert.id}
              label={dessert.name}
              image={dessert.image}
              price={dessert.price}
              discount={dessert.discount}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
