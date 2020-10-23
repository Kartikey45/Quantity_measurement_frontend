import React from "react";
import "./Dashboard.scss";
import Toolbar from "../ToolbarMaterial/Toolbar";
import Unit from "../UnitsMaterial/Unit";
import Convert from "../ConversionFields/Convert";
// import { useSelector, useDispatch } from "react-redux";
//import { lengthConversion } from "../../Redux/newIndex";

export default function Dashboard() {
  // const inch = useSelector((state) => state.inch);
  // const feet = useSelector((state) => state.feet);
  // const yard = useSelector((state) => state.yard);
  // const dispatch = useDispatch();

  return (
    <div className="parent">
      <Toolbar />
      <Unit />
      <Convert  />
    </div>
  );
}
