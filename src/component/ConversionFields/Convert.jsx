import React from "react";
import "./Convert.scss";

export default class Convert extends React.Component {
  render() {
    return (
      <div className="convertParent">

        <div className='convertChild'>
          <div className="inputField">
            <div style={{ display: "flex" }}>From</div>
            <input type="text" className="input" />
            <select className="select-box">
              <option>select1</option>
              <option>select2</option>
              <option>select3</option>
              <option>select4</option>
            </select>
          </div>

          <div className="inputField">
            <div style={{ display: "flex" }}>To</div>
            <input type="text" className="input" />
            <select className="select-box">
              <option>select1</option>
              <option>select2</option>
              <option>select3</option>
              <option>select4</option>
            </select>
          </div>
        </div>
        
      </div>
    );
  }
}
