import { createContext, useState } from "react";

const MaterialContext = createContext();

export const MaterialProvider = ({ children }) => {
  // material prices
  const [materialPrice, setMaterialPrice] = useState({
    rareRelic: "8",
    orehaRelic: "9",
    caldarrRelic: "10",
  });

  return (
    <MaterialContext.Provider value={{ materialPrice, setMaterialPrice }}>
      {children}
    </MaterialContext.Provider>
  );
};

export default MaterialContext;
