import { createContext, useState } from "react";
import { IDessertCollection } from "../types/dessertCollection";
import { useFetchCollection } from "../hooks/useFetchCollection";

interface DessertContextType {
  dessert: IDessertCollection[];
  setDessert: React.Dispatch<React.SetStateAction<IDessertCollection[]>>;
  countShoppingCart: number;
  setCountShoppingCart: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  error: string | null;
}

export const DessertContext = createContext<DessertContextType>(
  {} as DessertContextType
);

interface DessertContextProps {
  children: React.ReactNode;
}

export default function DessertProvider({ children }: DessertContextProps) {
  const { data: dessert, loading, error } = useFetchCollection("desserts");
  const [countShoppingCart, setCountShoppingCart] = useState<number>(0);

  return (
    <DessertContext.Provider
      value={{
        dessert,
        setDessert: () => {},
        countShoppingCart,
        setCountShoppingCart,
        loading,
        error,
      }}
    >
      {children}
    </DessertContext.Provider>
  );
}
