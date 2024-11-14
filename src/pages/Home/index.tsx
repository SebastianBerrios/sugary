import { useContext } from "react";
import { Link } from "react-router-dom";
import { DessertContext } from "../../contexts/Desserts";
import Hero from "../../components/Hero";
import DessertCard from "../../components/DessertCard";
import CategoryCard from "../../components/CategoryCard";

export default function Home() {
  const dessert = useContext(DessertContext);
  const desserts = dessert.dessert;

  return (
    <>
      <Hero />
      <h2 className="text-center text-2xl my-3">¿Qué estas buscando hoy?</h2>
      <CategoryCard />
      <section className="flex gap-5 mx-4">
        {desserts.map((dessert: any) => (
          <Link key={dessert.id} to={`/categories/${dessert.name}`}>
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
