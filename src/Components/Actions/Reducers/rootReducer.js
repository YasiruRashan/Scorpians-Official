import { combineReducers } from "redux";

const Default_Reducer = (initstate,action)=>{

    return{
    key:"Hello World",
    }
}

const rootReducer = combineReducers({
    default :Default_Reducer
})

export default rootReducer;