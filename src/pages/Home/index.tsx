import { useContext } from "react";
import Hero from "../../components/Hero";
import { DessertContext } from "../../contexts/Desserts";
import DessertCard from "../../components/DessertCard";

export default function Home() {
  const dessert = useContext(DessertContext);
  const desserts = dessert.dessert;

  console.log(desserts);

  return (
    <>
      <Hero />
      <h2 className="text-center text-2xl my-3">¿Qué estas buscando hoy?</h2>
      <section className="flex gap-5 mx-4">
        {desserts.map((dessert: any) => (
          <DessertCard
            id={dessert.id}
            label={dessert.name}
            image={dessert.image}
            price={dessert.price}
            discount={dessert.discount}
          />
        ))}
      </section>
    </>
  );
}
