import { useContext } from "react";
import MaterialContext from "../context/MaterialContext";
import Table from "./Table";
function CraftingCost() {
  const { loading } = useContext(MaterialContext);

  return loading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <div className="crafting_cost_container">
      <div className="crafting_cost">
        <div className="crafting_chests">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default CraftingCost;
