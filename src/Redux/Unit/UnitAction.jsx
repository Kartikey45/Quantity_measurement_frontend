import { LENGTH, TEMPRATURE, VOLUME } from "./UnitTypes";

export const lengthConversion = () => {
  return {
    type: LENGTH,
    payloadInch: "Inch",
    payloadFeet: "Feet",
    payloadYard: "Yard",
  };
};

export const tempretureConversion = () => {
  return {
    type: TEMPRATURE,
    payloadCelcius: "Celcius",
    payloadFahrenheit: "Fahrenheit",
  };
};

export const volumeConversion = () => {
    return {
      type: VOLUME,
      payloadLitre: "Litre",
      payloadMillilitre: "Millilitre",
    };
  };
