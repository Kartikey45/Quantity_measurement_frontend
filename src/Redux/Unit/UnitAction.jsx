import { LENGTH, TEMPRATURE, VOLUME, SECONDFUNCTION, FIRSTFUNCTION,  LENGTHTOGGLE, VOLUMETOGGLE, TEMPERATURETOGGLE,
  LENGTHTOGGLEOFF, VOLUMETOGGLEOFF, TEMPERATURETOGGLEOFF  } from "./UnitTypes";

export const lengthConversion = () => {
  return {
    type: LENGTH,
  };
};

export const tempretureConversion = () => {
  return {
    type: TEMPRATURE,
  };
};

export const volumeConversion = () => {
    return {
      type: VOLUME,
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