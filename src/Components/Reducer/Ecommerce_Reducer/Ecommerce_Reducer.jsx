export const Cart_InitialState = [];

export const Cart_Reducer = (state,action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            console.log(action.payload);
            const addeddata = [...state ,action.payload];
            console.log(addeddata);
            console.log(Cart_InitialState);
            
            return addeddata;  
    }
}