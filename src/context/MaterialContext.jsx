import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MaterialContext = createContext();

export const MaterialProvider = ({ children }) => {
  // material prices
  const [materialPrice, setMaterialPrice] = useState({
    rareRelic: "8",
    orehaRelic: "9",
    caldarrRelic: "10",
  });
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  //grab map/material data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("data.json");
        setCrafts(response.data.crafting_maps);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <MaterialContext.Provider
      value={{ materialPrice, setMaterialPrice, crafts, loading }}
    >
      {children}
    </MaterialContext.Provider>
  );
};

export default MaterialContext;
