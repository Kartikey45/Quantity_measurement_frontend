import React from "react";
import "./Toolbar.scss";

export default function Toolbar() {
  return (
    <div className="parentToolbar">
      <div class="toolbarParent">
        <h4 style={{ marginLeft: "15%" }}>Quanment</h4>
        <h6 style={{ marginTop: "auto", marginRight: "15%" }} type='submit'>History</h6>
      </div>
      <div className='welcomeNote'>
           <h3 style={{color: 'white'}} > Welcome To Quantity Measurement</h3>
      </div>
    </div>
  );
}
