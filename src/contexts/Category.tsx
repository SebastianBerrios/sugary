import { createContext, useState } from "react";
import { ICategoryCollection } from "../types/categoryCollection";
import { useFetchCollection } from "../hooks/useFetchCollection";

interface CategoryContextType {
  category: ICategoryCollection[];
  setCategory: React.Dispatch<React.SetStateAction<ICategoryCollection[]>>;
  countShoppingCart: number;
  setCountShoppingCart: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  error: string | null;
}

export const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

interface CategoryContextProps {
  children: React.ReactNode;
}

export default function CategoryProvider({ children }: CategoryContextProps) {
  const { data: category, loading, error } = useFetchCollection("categories");
  const [countShoppingCart, setCountShoppingCart] = useState<number>(0);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory: () => {},
        countShoppingCart,
        setCountShoppingCart,
        loading,
        error,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
