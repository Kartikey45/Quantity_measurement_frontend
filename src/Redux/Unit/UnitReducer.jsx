import {LENGTH ,TEMPRATURE, VOLUME} from './UnitTypes';

const initialState = {
    inch : '',
    feet : '',
    yard : '',
}

export const UnitReducer = (state = initialState, action) => {
    switch(action.type){
        case LENGTH : return {
            ...state,
            inch : action.payloadInch,
            feet : action.payloadFeet,
            yard : action.payloadYard,
            //numberOfBooks : state.numberOfBooks - action.payload
        }

        default : return state
    }
}