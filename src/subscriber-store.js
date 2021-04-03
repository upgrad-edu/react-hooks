import {createStore} from "redux";


const initialState={
    "subscribers":[]
}

function subscriberReducer(state=initialState,action){

    switch (action.type){
        case "SET_SUBSCRIBERS":
            return {...state,"subscribers":action.payload}
        default:
            return state;

    }
}


export default createStore(subscriberReducer);
