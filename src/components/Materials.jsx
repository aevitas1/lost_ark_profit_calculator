import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import caldarr_relic from "../assets/materials/caldarr_relic_excavating.png";
import oreha_relic from "../assets/materials/oreha_relic_excavating.png";
import rare_relic from "../assets/materials/rare_relic_excavating.png";
import gold from "../assets/materials/gold_currencies.png";
// import silver from "../assets/materials/silver_currencies.png";

function Materials() {
  const [matPriceActive, setMatPriceActive] = useState(false);

  const materialButtonClick = (e) => {
    matPriceActive === false
      ? setMatPriceActive(true)
      : setMatPriceActive(false);
  };

  return (
    <>
      <div
        className={matPriceActive === false ? "materials" : "show_materials"}
        // style={
        //   matPriceActive
        //     ? { maxHeight: ShowMaterials.scrollHeight + "px" }
        //     : { maxHeight: "0px" }
        // }
      >
        <div className="material_container">
          <h3>Excavating</h3>
          <div className="material_list">
            <div className="material">
              <span>
                <img className="image" src={rare_relic} alt="" />
                <p>Rare Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>

            <div className="material">
              <span>
                <img className="image" src={oreha_relic} alt="" />
                <p>Oreha Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>

            <div className="material">
              <span>
                <img className="image" src={caldarr_relic} alt="" />
                <p>Caldarr Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>
          </div>
          <h3>Fishing</h3>
          <div className="material_list">
            <div className="material">
              <span>
                <img className="image" src={rare_relic} alt="" />
                <p>Rare Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>

            <div className="material">
              <span>
                <img className="image" src={oreha_relic} alt="" />
                <p>Oreha Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>

            <div className="material">
              <span>
                <img className="image" src={caldarr_relic} alt="" />
                <p>Caldarr Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>
          </div>
          <h3>Hunting</h3>
          <div className="material_list">
            <div className="material">
              <span>
                <img className="image" src={rare_relic} alt="" />
                <p>Rare Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>

            <div className="material">
              <span>
                <img className="image" src={oreha_relic} alt="" />
                <p>Oreha Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>

            <div className="material">
              <span>
                <img className="image" src={caldarr_relic} alt="" />
                <p>Caldarr Relic</p>
                <div className="input_container">
                  <input type="text" />
                  <img src={gold} alt="" className="gold" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="materials_toggle">
        <button
          onClick={materialButtonClick}
          className="materials_toggle_button"
        >
          {matPriceActive === false
            ? "Edit material prices"
            : "Hide material prices"}
          {matPriceActive === false ? <FiPlus /> : <FiMinus />}
        </button>
      </div>
    </>
  );
}

export default Materials;
