"use client";

import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextProps = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const CategoryContext = createContext<ContextProps>({
  category: "",
  setCategory: (): string => "",
});

export default function CategoryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [category, setCategory] = useState<string>("All");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryProvider = () => useContext(CategoryContext);
