import {combineReducers} from 'redux'

const taskReducer=(state=[],action)=>{
    switch(action.type){
    case 'ADD_TASK':
    console.log("asf")
        state=state.concat(action.payload)
        // state={
        //     ...state.concat(action.payload)
        // }
        break;
    case 'DELETE_TASK':
       state=state.slice();
        state.splice(action.payload,1)
        break;    
    }
    return state;
},
reducer=combineReducers({
    tasks:taskReducer
})

export default reducer;