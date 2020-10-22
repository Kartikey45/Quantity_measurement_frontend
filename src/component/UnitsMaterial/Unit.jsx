import React from "react";
import "./Unit.scss";
import { ReactComponent as Scale } from "../../Images&Logos/scale.svg";
import { ReactComponent as Hot } from "../../Images&Logos/hot.svg";
import { ReactComponent as Beaker } from "../../Images&Logos/beaker.svg";

export default function Unit() {
  return (
    <div className="unitParent">
      <div className="choosetype">
        <div className='chooseDiv'>
          <h6  style={{marginLeft: '4%'}} >CHOOSE TYPE</h6>
        </div>
      </div>
      <div className="unitChild">
        <div className="logo">
          <div className="unitLogo">
            <Scale />
          </div>
          <div className="unitLogo">
            <Hot />
          </div>
          <div className="unitLogo">
            <Beaker />
          </div>
        </div>
      </div>
    </div>
  );
}
