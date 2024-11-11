import { createContext, useState, useEffect, ReactNode } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { IDessert } from "../types/dessert";

interface DessertContextType {
  name: ReactNode;
  dessert: any;
  setDessert: React.Dispatch<React.SetStateAction<IDessert>>;
  countShoppingCart: number;
  setCountShoppingCart: React.Dispatch<React.SetStateAction<number>>;
}

export const DessertContext = createContext<DessertContextType>(
  {} as DessertContextType
);

interface DessertContextProps {
  children: React.ReactNode;
}

export default function DessertProvider({ children }: DessertContextProps) {
  const [dessert, setDessert] = useState([]);
  const [countShoppingCart, setCountShoppingCart] = useState<number>(0);

  useEffect(() => {
    const fetchDulces = async () => {
      const dessertCollection = collection(db, "desserts");
      const dessertSnapshot = await getDocs(dessertCollection);
      const dessertsList: any = dessertSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDessert(dessertsList);
    };

    fetchDulces();
  }, []);

  return (
    <DessertContext.Provider
      value={{ dessert, setDessert, countShoppingCart, setCountShoppingCart }}
    >
      {children}
    </DessertContext.Provider>
  );
}
