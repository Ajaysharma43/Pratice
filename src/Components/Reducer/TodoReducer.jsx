export const DataState = [] 

export const DataReducer = (state,action) => {
    switch(action.type){
        case'ADD_TASK':
        console.log(state);
        return[...state,action.payload]
    }
}