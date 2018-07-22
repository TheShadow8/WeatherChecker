import { FETCH_WEATHER } from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Array.concat() : merge two or more arrays. This method does not change the existing arrays, 
            //but instead returns a new array.
            //return state.concat([action.payload.data]);

            return [action.payload.data, ...state];
    }
    return state;
}