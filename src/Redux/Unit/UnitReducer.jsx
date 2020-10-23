import { LENGTH, TEMPRATURE, VOLUME } from "./UnitTypes";

const initialState = {
  inch: "",
  feet: "",
  yard: "",
  celcius: "",
  fahrenheit: "",
  litre : "",
  millilitre : "",
};

export const UnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case LENGTH:
      return {
        // ...state,
        inch: action.payloadInch,
        feet: action.payloadFeet,
        yard: action.payloadYard,
      };

    case TEMPRATURE:
      return {
        // ...state,
        celcius: action.payloadCelcius,
        fahrenheit: action.payloadFahrenheit,
      };

    case VOLUME:
      return {
        // ...state,
        litre: action.payloadLitre,
        millilitre: action.payloadMillilitre,
      };

    default:
      return state;
  }
};
