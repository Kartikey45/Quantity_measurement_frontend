import React from "react";
import "./Convert.scss";
import { useSelector } from "react-redux";

export default function Convert() {
  const inch = useSelector((state) => state.inch);
  const feet = useSelector((state) => state.feet);
  const yard = useSelector((state) => state.yard);
  const celcius = useSelector((state) => state.celcius);
  const fahrenheit = useSelector((state) => state.fahrenheit);
  const litre = useSelector((state) => state.litre);
  const millilitre = useSelector((state) => state.millilitre);
  const none = useSelector((state) => state.none);
  

  return (
    <div className="convertParent">
      <div className="convertChild">
        <div className="inputField">
          <div style={{ display: "flex" }}>From</div>
          <input type="text" className="input" />
          <select className="select-box">
            <option>{inch}{celcius}{litre}</option>
            <option>{feet}{fahrenheit}{millilitre}</option>
            <option>{yard}{none}</option>
          </select>
        </div>

        <div className="inputField">
          <div style={{ display: "flex" }}>To</div>
          <input type="text" className="input" />
          <select className="select-box">
            <option>{inch}{celcius}{litre}</option>
            <option>{feet}{fahrenheit}{millilitre}</option>
            <option>{yard}{none}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
