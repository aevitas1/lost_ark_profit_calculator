import caldarr_relic from "../assets/materials/caldarr_relic_excavating.png";
import oreha_relic from "../assets/materials/oreha_relic_excavating.png";
import rare_relic from "../assets/materials/rare_relic_excavating.png";
import gold from "../assets/materials/gold_currencies.png";
import silver from "../assets/materials/silver_currencies.png";

function Materials() {
  return (
    <div className="materials">
      <img src={caldarr_relic} alt="" />
      <img src={oreha_relic} alt="" />
      <img src={rare_relic} alt="" />
      <img src={gold} alt="" />
      <img src={silver} alt="" />
    </div>
  );
}

export default Materials;
