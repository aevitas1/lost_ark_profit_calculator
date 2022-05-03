import { useContext, useState } from "react";
import MaterialContext from "../context/MaterialContext";
import mapImage from "../assets/materials/map.png";
import caldarr_relic from "../assets/materials/caldarr_relic_excavating.png";
import oreha_relic from "../assets/materials/oreha_relic_excavating.png";
import rare_relic from "../assets/materials/rare_relic_excavating.png";
import gold from "../assets/materials/gold_currencies.png";
// import PropTypes from 'prop-types'

function Table() {
  const { crafts, materialPrice } = useContext(MaterialContext);
  const [calcMapPrice, setCalcMapPrice] = useState([]);

  return (
    <>
      <table id="crafting_cost_table">
        <thead>
          <tr>
            <th>Maps</th>
            <th>Materials</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {crafts.maps.map((item) => (
            <>
              <tr className="material_row">
                <td key={item.index + 1} className="map_names">
                  <span>
                    <img src={mapImage} className="map_img" alt="A map" />
                    <p>{item.name}</p>
                  </span>
                </td>
                <td className="material_count">
                  {item.materials.map((names) => (
                    <>
                      {names.name === "Caldarr Relic" && (
                        <span key={item.index + 1.1}>
                          <img src={caldarr_relic} alt="Caldarr relic" />
                          <p style={{ width: "10rem" }}>{names.name}</p>
                          <p>{names.amount}</p>
                        </span>
                      )}
                      {names.name === "Rare Relic" && (
                        <span key={item.index + 1.11}>
                          <img src={rare_relic} alt="Rare relic" />
                          <p style={{ width: "10rem" }}>{names.name}</p>
                          <p>{names.amount}</p>
                        </span>
                      )}
                      {names.name === "Gold" && (
                        <span key={item.index + 1.111}>
                          <img src={gold} alt="Gold coins" />
                          <p style={{ width: "10rem" }}>{names.name}</p>
                          <p>{names.amount}</p>
                        </span>
                      )}
                    </>
                  ))}
                </td>
                <td className="total_mat_cost">
                  <span key={item.index + 1.1111}>
                    <img src={gold} alt="Gold coins" />
                    {item.materials.map((amounts) => (
                      <>
                        <p>Hi</p>
                      </>
                    ))}
                  </span>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

Table.defaultProps = {
  //   version: "primary",
  //   type: "button",
  //   isDisabled: false,
};

Table.propTypes = {
  //   children: PropTypes.node.isRequired,
  //   version: PropTypes.string,
  //   type: PropTypes.string,
  //   isDisabled: PropTypes.bool,
};

export default Table;

{
  /* <td key={index} className="material_count">
{item.materials.map((names, index) => (
  <>
    {names.name} x {names.amount} <br></br>
  </>
))}
</td> */
}
