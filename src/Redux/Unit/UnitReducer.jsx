import { LENGTH, TEMPRATURE, VOLUME,  SECONDFUNCTION, FIRSTFUNCTION,
   LENGTHTOGGLE, VOLUMETOGGLE, TEMPERATURETOGGLE,
   LENGTHTOGGLEOFF, VOLUMETOGGLEOFF, TEMPERATURETOGGLEOFF } from "./UnitTypes";

const initialState = {
  
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
