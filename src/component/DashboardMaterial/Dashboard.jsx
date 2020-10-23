import React from "react";
import "./Dashboard.scss";
import Toolbar from "../ToolbarMaterial/Toolbar";
import Unit from "../UnitsMaterial/Unit";
import Convert from "../ConversionFields/Convert";

export default function Dashboard() {
  return (
    <div className="parent">
      <Toolbar />
      <Unit />
      <Convert  />
    </div>
  );
}
