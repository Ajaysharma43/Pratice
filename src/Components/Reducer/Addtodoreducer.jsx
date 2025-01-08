export const InitialState = {
    Task:'',
    Taskname:''
}

export const Reducer = (state,action) => {
    switch(action.type) {
        case 'UPDATE_TODO':
            return {
                ...state,
                [action.field]:action.value
            }

            case 'RESET':
                return InitialState

    }
}