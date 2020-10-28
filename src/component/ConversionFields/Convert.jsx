import React, {useState} from "react";
import "./Convert.scss";
import {useDispatch, useSelector } from "react-redux";
import UnitService from "../../services/UnitService";
import {firstValueChange, secondValueChange} from "../../Redux/newIndex";

export default function Convert() {
 
  const [result, setResult] = useState("");

  const dispatch = useDispatch();

  const Option = useSelector((state) => state.options);
  const firstValue = useSelector((state) => state.firstValue);
  const secondValue = useSelector((state) => state.secondValue);

  const change = (event) => {
    console.log(firstValue + 'To' + secondValue)
    let operation = firstValue + 'To' + secondValue ;
    const Data = {
      "value": event,
      "operation": operation
    }

    UnitService.Conversion(Data)
    .then((data) => {
      console.log(data);
      setResult(data.data.data.result)
    })
  }
  
  

  return (
    
    <div className="convertParent">
      <div className="convertChild">
        <div className="inputField">
          <div style={{ display: "flex" }}>From</div>
          <input type="text" className="input" onChange={(event) => {change(event.target.value)}} />
          <select className="select-box" value={firstValue} onChange={(event) => dispatch(firstValueChange(event.target.value))} >
          {
            Option.map((element, key) => {
            return <option key={key}>{element}</option>
            })
          }
           
          </select>
        </div>

        <div className="inputField">
          <div style={{ display: "flex" }}>To</div>
          <input type="text" value={result} className="input" />
          <select className="select-box" value={secondValue} onChange={(event) => dispatch(secondValueChange(event.target.value))}  >
          {
            Option.map((element, key) => {
            return <option key={key}>{element}</option>
            })
          }
          </select>
        </div>
      </div>
    </div>
  );
}
