import React from "react";
import "./Unit.scss";
import { ReactComponent as Scale } from "../../Images&Logos/scale.svg";
import { ReactComponent as Hot } from "../../Images&Logos/hot.svg";
import { ReactComponent as Beaker } from "../../Images&Logos/beaker.svg";
import {lengthConversion, tempretureConversion, volumeConversion, 
  lengthColorToggles, lengthColorOffToggles, volumeColorOffToggles , volumeColorToggles, 
  temperatureColorToggles, temperatureColorOffToggles }  from "../../Redux/newIndex";
import { useDispatch, useSelector } from "react-redux";

export default function Unit() {
  const lengthColor = useSelector((state) => state.lengthColor);
  const tempColor = useSelector((state) => state.tempColor );
  const volColor = useSelector((state) => state.volColor );

    const lengthStatus = useSelector((state) => state.lengthStatus);
    const volumeStatus =  useSelector((state) => state.volumeStatus);
    const temperatureStatus = useSelector((state) => state.temperatureStatus);
    const lengthColorToggle = useSelector((state) => state.lengthColorToggle);
    const volumeColorToggle = useSelector((state) => state.volumeColorToggle);
    const temperatureColorToggle = useSelector((state) => state.temperatureColorToggle);
    // const volumeColorOffToggle =  useSelector((state) => state.volumeColorOffToggles);
    // const volumeColorToggle =  useSelector((state) => state.volumeColorToggles);

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
            // className="unitLogoLength"
            className={(lengthColorToggle || lengthStatus) ? "LengthOverOn" : "Image1"}
            onClick={() => {
              dispatch(lengthConversion());
            }}
            onMouseOver= {() => {
              dispatch(lengthColorToggles());
            }} 
            onMouseLeave=  {() => {
              dispatch(lengthColorOffToggles());
            }} 
          >
            <Scale/>
            <h6>Length</h6>
          </div>
          <div
           style={{ backgroundColor : tempColor }}
            //className="unitLogoTemprature"
            className={temperatureColorToggle || temperatureStatus ? "TempOverOn" : "Image2"}
            onClick={() => {
              dispatch(tempretureConversion());
            }}
            onMouseOver= {() => {
              dispatch(temperatureColorToggles());
            }} 
            onMouseLeave=  {() => {
              dispatch(temperatureColorOffToggles());
            }} 
          >
            <Hot/>
            <h6>Temprature</h6>
          </div>
          <div
           style={{ backgroundColor : volColor }}
            //className="unitLogoVolume"
            className={ volumeColorToggle || volumeStatus ? "VolumeOverOn" : "Image3"}
            onClick={() => {
              dispatch(volumeConversion());
            }}
            onMouseOver= {() => {
              dispatch(volumeColorToggles());
            }} 
            onMouseLeave=  {() => {
              dispatch(volumeColorOffToggles());
            }} 
          >
            <Beaker/>
            <h6>Volume</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
