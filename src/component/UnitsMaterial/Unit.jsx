import React from "react";
import "./Unit.scss";
import { ReactComponent as Scale } from "../../Images&Logos/scale.svg";
import { ReactComponent as Hot } from "../../Images&Logos/hot.svg";
import { ReactComponent as Beaker } from "../../Images&Logos/beaker.svg";
import {lengthConversion, tempretureConversion, volumeConversion } from "../../Redux/newIndex";
import { useDispatch, useSelector } from "react-redux";

export default function Unit() {
  const lengthColor = useSelector((state) => state.lengthColor);
  const tempColor = useSelector((state) => state.tempColor );
  const volColor = useSelector((state) => state.volColor );

  const dispatch = useDispatch();
  return (
    <div className="unitParent">
      <div className="choosetype">
        <div className="chooseDiv">
          <h6 style={{ marginLeft: "4%" }}>CHOOSE TYPE</h6>
        </div>
      </div>
      <div className="unitChild">
        <div className="logo">
          <div
           style={{ backgroundColor : lengthColor}}
            className="unitLogoLength"
            onClick={() => {
              dispatch(lengthConversion());
            }}
          >
            <Scale  />
            <h6>Length</h6>
          </div>
          <div
           style={{ backgroundColor : tempColor }}
            className="unitLogoTemprature"
            onClick={() => {
              dispatch(tempretureConversion());
            }}
          >
            <Hot />
            <h6>Temprature</h6>
          </div>
          <div
           style={{ backgroundColor : volColor }}
            className="unitLogoVolume"
            onClick={() => {
              dispatch(volumeConversion());
            }}
          >
            <Beaker />
            <h6>Volume</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
