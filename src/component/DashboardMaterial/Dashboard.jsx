import React from "react";
import "./Dashboard.scss";
import Toolbar from "../ToolbarMaterial/Toolbar";
import Unit from "../UnitsMaterial/Unit";
import Convert from "../ConversionFields/Convert";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="parent">
        <Toolbar />
        <Unit />
        <Convert />
      </div>
    );
  }
}
