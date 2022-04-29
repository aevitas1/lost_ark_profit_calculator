import { useEffect, useState, useContext } from "react";
import mapImage from "../assets/materials/map.png";
import axios from "axios";
import MaterialContext from "../context/MaterialContext";
function CraftingCost() {
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { materialPrice } = useContext(MaterialContext);
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
  console.log(materialPrice);
  return loading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <div className="crafting_cost_container">
      <div className="crafting_cost">
        <div className="crafting_chests">
          <table id="crafting_cost_table">
            <thead>
              <tr>
                <th>Maps</th>
                <th>Materials</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {crafts.maps.map((item, index) => (
                <>
                  <tr>
                    <td key={index} className="map_names">
                      <img src={mapImage} className="map_img" alt="A map" />
                      {item.name}
                    </td>
                    {item.materials.map((names, index) => (
                      <td key={index} className="material_count">
                        {names.name} x {names.amount}
                      </td>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CraftingCost;
