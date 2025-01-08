export const InitialState = {
    FullName : '',
    Email : '',
    Rating : ["Bad","Average","Good","Excelent"],
    Comments : ""
}

export const Reducer = (state,action) => {
    switch (action.type) {
        case'UPDATE_FIELD':
            return{
                ...state,
                [action.field] : action.value
            };

            case'RESET':
            return InitialState
    }
}