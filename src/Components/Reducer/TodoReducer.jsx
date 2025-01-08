export const DataState = [] 

export const DataReducer = (state,action) => {
    switch(action.type){
        case'ADD_TASK':
      const updatedData = [...state, action.payload];
      return updatedData;
    }
}