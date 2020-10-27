import React, {useState} from "react";
import "./Convert.scss";
import { useSelector } from "react-redux";
import UnitService from "../../services/UnitService"

export default function Convert() {
  const [unit1, setUnit1] = useState("");
  const [unit2, setUnit2] = useState("");
  const [result, setResult] = useState("");

  const inch = useSelector((state) => state.inch);
  const inch2 = useSelector((state) => state.inch);
  const feet = useSelector((state) => state.feet);
  const feet2 = useSelector((state) => state.feet);
  const yard = useSelector((state) => state.yard);
  const yard2 = useSelector((state) => state.yard);
  const celcius = useSelector((state) => state.celcius);
  const celcius2 = useSelector((state) => state.celcius);
  const fahrenheit = useSelector((state) => state.fahrenheit);
  const fahrenheit2 = useSelector((state) => state.fahrenheit);
  const litre = useSelector((state) => state.litre);
  const litre2 = useSelector((state) => state.litre);
  const millilitre = useSelector((state) => state.millilitre);
  const millilitre2 = useSelector((state) => state.millilitre);
  const none = useSelector((state) => state.none);
  
  const change = (event) => {
    console.log(unit1 + 'To' + unit2)
    let operation = unit1 + 'To' + unit2 ;
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
          <select className="select-box" value={unit1} onChange={(event) => setUnit1(event.target.value)} >
            <option>{feet}{fahrenheit}{litre}</option>
            <option>{inch}{celcius}{millilitre}</option>
            <option>{yard}{none}</option>
          </select>
        </div>

        <div className="inputField">
          <div style={{ display: "flex" }}>To</div>
          <input type="text" value={result} className="input" />
          <select className="select-box" value={unit2} onChange={(event) => setUnit2(event.target.value)} >
            <option>{inch2}{celcius2}{millilitre2}</option>
            <option>{feet2}{fahrenheit2}{litre2}</option>
            <option>{yard2}{none}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
