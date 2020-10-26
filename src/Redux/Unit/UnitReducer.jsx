import { LENGTH, TEMPRATURE, VOLUME } from "./UnitTypes";

const initialState = {
  inch: "",
  feet: "",
  yard: "",
  celcius: "",
  fahrenheit: "",
  litre : "",
  millilitre : "",
  none : "",
  // length : ["Inch","Feet","Yard",],
  // temprature : ["Celcius","Fahrenheit",],
  // volume : ["Litre","Millilitre"]
};

export const UnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case LENGTH:
      return {
         //...state,
        inch: action.payloadInch,
        feet: action.payloadFeet,
        yard: action.payloadYard,
        // length : state.length,
      };

    case TEMPRATURE:
      return {
         //...state,
        celcius: action.payloadCelcius,
        fahrenheit: action.payloadFahrenheit,
        none : action.payloadNone,
        //temprature : state.temprature
      };

    case VOLUME:
      return {
         //...state,
        litre: action.payloadLitre,
        millilitre: action.payloadMillilitre,
        none : action.payloadNone,
        //volume : state.volume
      };

    default:
      return state;
  }
};
