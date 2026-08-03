import { createContext, useState } from "react";
import initialData from "./data/fashionData";

// Buat Context
export const FashionContext = createContext();

// Buat Provider (Pembungkus)
export const FashionProvider = ({ children }) => {
  const [fashionList, setFashionList] = useState(initialData);

  // Fungsi untuk menambah fashion baru
  const addFashion = (newItem) => {
    setFashionList((prevItems) => [...prevItems, newItem]);
  };

  return (
    <FashionContext.Provider value={{ fashionList, addFashion }}>
      {children}
    </FashionContext.Provider>
  );
};