import { LENGTH, TEMPRATURE, VOLUME, SECONDFUNCTION, FIRSTFUNCTION,  LENGTHTOGGLE, VOLUMETOGGLE, TEMPERATURETOGGLE,
  LENGTHTOGGLEOFF, VOLUMETOGGLEOFF, TEMPERATURETOGGLEOFF  } from "./UnitTypes";


export const lengthConversion = () => {
  return {
    type: LENGTH,
    // payloadInch: "Inch",
    // payloadFeet: "Feet",
    // payloadYard: "Yard",
    //payloadLengthColor: "#b3ffcc",
  };
};

export const tempretureConversion = () => {
  return {
    type: TEMPRATURE,
    // payloadCelcius: "Celsius",
    // payloadFahrenheit: "Fahrenheit",
    // payloadNone : "None",
    //payloadTempColor : "#ffb3b3",
  };
};

export const volumeConversion = () => {
    return {
      type: VOLUME,
      // payloadLitre: "Litre",
      // payloadMillilitre: "Millilitre",
      // payloadNone : "None",
      //payloadVolColor : "#dab3ff"
    };
  };


  export const firstValueChange = (value) => {
    return {
      type : FIRSTFUNCTION,
      values : value 
    }
  }

  export const secondValueChange = (value) => {
    return {
      type : SECONDFUNCTION,
      values : value 
    }
  }

  export  const lengthColorToggles = () => {
    return {
        type : LENGTHTOGGLE
    }
}

export  const volumeColorToggles = () => {
    return {
        type : VOLUMETOGGLE
    }
}

export  const temperatureColorToggles = () => {
    return {
        type : TEMPERATURETOGGLE
    }
}

export  const lengthColorOffToggles = () => {
  return {
      type : LENGTHTOGGLEOFF
  }
}

export  const volumeColorOffToggles = () => {
  return {
      type : VOLUMETOGGLEOFF
  }
}

export  const temperatureColorOffToggles = () => {
  return {
      type : TEMPERATURETOGGLEOFF
  }
}