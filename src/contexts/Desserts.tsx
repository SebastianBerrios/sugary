import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { IDessert } from "../types/Dessert";

interface DessertContextType {
  dessert: any;
  setDessert: React.Dispatch<React.SetStateAction<IDessert>>;
}

export const DessertContext = createContext<DessertContextType>(
  {} as DessertContextType
);

interface DessertContextProps {
  children: React.ReactNode;
}

export default function DessertProvider({ children }: DessertContextProps) {
  const [dessert, setDessert] = useState<[]>([]);

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
    <DessertContext.Provider value={{ dessert }}>
      {children}
    </DessertContext.Provider>
  );
}
