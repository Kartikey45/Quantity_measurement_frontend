import React from "react";
import "./Convert.scss";
import { useSelector } from "react-redux";

export default function Convert() {
  const inch = useSelector((state) => state.inch);
  const feet = useSelector((state) => state.feet);
  const yard = useSelector((state) => state.yard);

  return (
    <div className="convertParent">
      <div className="convertChild">
        <div className="inputField">
          <div style={{ display: "flex" }}>From</div>
          <input type="text" className="input" />
          <select className="select-box">
            <option>{inch}</option>
            <option>{feet}</option>
            <option>{yard}</option>
            {/* <option>select4</option> */}
          </select>
        </div>

        <div className="inputField">
          <div style={{ display: "flex" }}>To</div>
          <input type="text" className="input" />
          <select className="select-box">
            <option>{inch}</option>
            <option>{feet}</option>
            <option>{yard}</option>
            {/* <option>select4</option> */}
          </select>
        </div>
      </div>
    </div>
  );
}
