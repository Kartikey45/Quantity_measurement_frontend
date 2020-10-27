import React, {useState} from "react";
import "./Convert.scss";
import {useDispatch, useSelector } from "react-redux";
import UnitService from "../../services/UnitService";
import {firstValueChange, secondValueChange} from "../../Redux/newIndex";

export default function Convert() {
  // const [unit1, setUnit1] = useState("");
  // const [unit2, setUnit2] = useState("");
  const [result, setResult] = useState("");

  const dispatch = useDispatch();

  // const inch = useSelector((state) => state.inch);
  // const inch2 = useSelector((state) => state.inch);
  // const feet = useSelector((state) => state.feet);
  // const feet2 = useSelector((state) => state.feet);
  // const yard = useSelector((state) => state.yard);
  // const yard2 = useSelector((state) => state.yard);
  // const celcius = useSelector((state) => state.celcius);
  // const celcius2 = useSelector((state) => state.celcius);
  // const fahrenheit = useSelector((state) => state.fahrenheit);
  // const fahrenheit2 = useSelector((state) => state.fahrenheit);
  // const litre = useSelector((state) => state.litre);
  // const litre2 = useSelector((state) => state.litre);
  // const millilitre = useSelector((state) => state.millilitre);
  // const millilitre2 = useSelector((state) => state.millilitre);
  // const none = useSelector((state) => state.none);

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
            {/* <option>First Unit</option> */}
            {/* <option>{feet}{fahrenheit}{litre}</option>
            <option>{inch}{celcius}{millilitre}</option>
            <option>{yard}{none}</option> */}
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
            {/* <option>Second Unit</option> */}
            {/* <option>{inch2}{celcius2}{millilitre2}</option>
            <option>{feet2}{fahrenheit2}{litre2}</option>
            <option>{yard2}{none}</option> */}
          </select>
        </div>
      </div>
    </div>
  );
}
