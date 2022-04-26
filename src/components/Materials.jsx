import { useState } from "react";

// import caldarr_relic from "../assets/materials/caldarr_relic_excavating.png";
// import oreha_relic from "../assets/materials/oreha_relic_excavating.png";
// import rare_relic from "../assets/materials/rare_relic_excavating.png";
// import gold from "../assets/materials/gold_currencies.png";
// import silver from "../assets/materials/silver_currencies.png";

function Materials() {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <>
      <div className={active === 0 ? "materials" : "show materials"}>
        <h1>Test</h1>
      </div>

      <div className="materials_toggle">
        <button onClick={() => setActive(1)}>
          {active === 0 ? "Edit material prices" : "Hide material prices"}
        </button>
      </div>
    </>
  );
}

export default Materials;
