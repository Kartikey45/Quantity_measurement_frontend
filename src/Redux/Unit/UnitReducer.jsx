import { LENGTH, TEMPRATURE, VOLUME,  SECONDFUNCTION, FIRSTFUNCTION,
   LENGTHTOGGLE, VOLUMETOGGLE, TEMPERATURETOGGLE,
   LENGTHTOGGLEOFF, VOLUMETOGGLEOFF, TEMPERATURETOGGLEOFF } from "./UnitTypes";

const initialState = {
  // inch: "",
  // feet: "",
  // yard: "",
  // celcius: "",
  // fahrenheit: "",
  // litre : "",
  // millilitre : "",
  // none : "",
  // lengthColor : "",
  // tempColor : "",
  // volColor : "",
  // length : ["Inch","Feet","Yard",],
  // temprature : ["Celcius","Fahrenheit",],
  // volume : ["Litre","Millilitre"]
    unit1: ['Inch', 'Feet', 'Yard'],
    unit2: ['Celsius', 'Fahrenheit'],
    unit3: ['Litre', 'Millilitre'],
    options : ['Inch', 'Feet', 'Yard',],
    firstValue : 'Inch',
    secondValue : 'Inch',

    lengthStatus: true,
    volumeStatus: false,
    temperatureStatus: false,
    lengthColorToggle: false,
    volumeColorToggle: false,
    temperatureColorToggle: false,
};

export const UnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case LENGTH:
      return {
         ...state,
        // inch: action.payloadInch,
        // feet: action.payloadFeet,
        // yard: action.payloadYard,
        //lengthColor : action.payloadLengthColor,
        // length : state.length,
        options : state.unit1,
        firstValue : 'Inch',
        secondValue : 'Inch',

        lengthStatus: !state.lengthStatus,
                volumeStatus: false,
                temperatureStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,
      };

    case TEMPRATURE:
      return {
         ...state,
        // celcius: action.payloadCelcius,
        // fahrenheit: action.payloadFahrenheit,
        // none : action.payloadNone,
        //tempColor : action.payloadTempColor,
        //temprature : state.temprature
        options : state.unit2,
        firstValue : 'Celsius',
        secondValue : 'Celsius',

        temperatureStatus: !state.temperatureStatus,
                lengthStatus: false,
                volumeStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,
      };

    case VOLUME:
      return {
         ...state,
        // litre: action.payloadLitre,
        // millilitre: action.payloadMillilitre,
        // none : action.payloadNone,
        //volColor : action.payloadVolColor,
        //volume : state.volume
        options : state.unit3,
        firstValue : 'Litre',
        secondValue : 'Litre',

        volumeStatus: !state.volumeStatus,
        lengthStatus: false,
        temperatureStatus: false,
        lengthColorToggle: false,
        volumeColorToggle: false,
        temperatureColorToggle: false,
      };

      case FIRSTFUNCTION:
      return {
         ...state,
         firstValue : action.values
      };

      case SECONDFUNCTION:
        return {
           ...state,
           secondValue : action.values
        };

        case LENGTHTOGGLE:

            return {
                ...state,
                lengthColorToggle: true,
                volumeColorToggle: false,
                temperatureColorToggle: false,
            }

        case VOLUMETOGGLE:

            return {
                ...state,
                lengthColorToggle: false,
                volumeColorToggle: true,
                temperatureColorToggle: false,
            }
        
            case TEMPERATURETOGGLE:

            return {
                ...state,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: true,
            }

            case LENGTHTOGGLEOFF:

                return {
                    ...state,
                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }

                case VOLUMETOGGLEOFF:

                return {
                    ...state,

                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }
    
            case TEMPERATURETOGGLEOFF:

                return {
                    ...state,

                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }
               

    default:
      return state;
  }
};
