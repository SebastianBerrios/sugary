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
      <section className="my-5">
        <h2 className="text-center text-2xl mb-4">¿Qué estas buscando hoy?</h2>
        <CategoryCard />
      </section>
      <section className="my-5">
        <h2 className="text-center text-2xl mb-4">Nuestras recomendacioens</h2>
        <div className="flex gap-5 mx-4">
          {desserts.map((dessert: any) => (
            <Link key={dessert.id} to={`/desserts/${dessert.name}`}>
              <DessertCard
                id={dessert.id}
                label={dessert.name}
                image={dessert.image}
                price={dessert.price}
                discount={dessert.discount}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
