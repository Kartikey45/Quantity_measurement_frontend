import { LENGTH, TEMPRATURE, VOLUME } from "./UnitTypes";


export const lengthConversion = () => {
  return {
    type: LENGTH,
    payloadInch: "Inch",
    payloadFeet: "Feet",
    payloadYard: "Yard",
    payloadLengthColor: "#b3ffcc",
  };
};

export const tempretureConversion = () => {
  return {
    type: TEMPRATURE,
    payloadCelcius: "Celsius",
    payloadFahrenheit: "Fahrenheit",
    payloadNone : "None",
    payloadTempColor : "#ffb3b3",
  };
};

export const volumeConversion = () => {
    return {
      type: VOLUME,
      payloadLitre: "Litre",
      payloadMillilitre: "Millilitre",
      payloadNone : "None",
      payloadVolColor : "#dab3ff"
    };
  };
