import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DessertContext } from "../../contexts/Desserts";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function DessertDetail() {
  const dessert = useContext(DessertContext);
  const desserts = dessert.dessert;

  const dessertId = useParams();

  const dessertInfo = desserts.find(
    (dessert: { name: string }) => dessert.name === dessertId.categoryId
  );

  const [count, setCount] = useState<number>(0);

  const addDessertShoppingCart = () => {
    dessert.setCountShoppingCart(dessert.countShoppingCart + count);
    setCount(0);
  };

  return (
    <>
      <h1 className="uppercase text-center bg-red-500">{dessertInfo.name}</h1>
      <div className="flex gap-2 p-4">
        <img className="size-96 rounded-2xl" src={dessertInfo.image} alt="" />
        <div className="flex flex-col">
          <h3 className="capitalize">{dessertInfo.name}</h3>
          <span>S/. {dessertInfo.price}</span>
          <p className="">{dessertInfo.description}</p>
          <span>{dessertInfo.category}</span>
          <div className="flex gap-1">
            <span className="p-1 size-3">{count}</span>
            <div className="grid gap-1">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => setCount(count + 1)}
                className="text-soft-pink pr-2 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => setCount(count - 1)}
                className="text-soft-pink pr-2 cursor-pointer"
              />
            </div>
          </div>
          <button
            onClick={addDessertShoppingCart}
            className="bg-red-500 rounded-full py-1 px-2 max-w-fit"
          >
            Añadir postre
          </button>
        </div>
      </div>
      <h2></h2>
    </>
  );
}
