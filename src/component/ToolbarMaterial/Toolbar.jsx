import React from "react";
import "./Toolbar.scss";
import { Link } from "react-router-dom";


export default function Toolbar(props) {
  // History = () => {
  //   this.props.history.push("/getHistory");
  // }
  return (
    <div className="parentToolbar">
      <div class="toolbarParent">
        <h4 style={{ marginLeft: "15%" }}>Quanment</h4>
        <Link to="/getHistory" style={{marginRight: "15%"}}><h6 style={{ marginTop: "auto", color:"black" }} type='submit' >History</h6></Link>
        {/* <h6 style={{ marginTop: "auto", marginRight: "15%" }} type='submit' >History</h6> */}
      </div>
      <div className='welcomeNote'>
           <h3 style={{color: 'white'}} > Welcome To Quantity Measurement</h3>
      </div>
    </div>
  );
}
