import { useReducer } from "react";

const Feedback = () => {

    const InitialState = {
        FullName : '',
        Email : '',
        Rating : ["Bad","Average","Good","Excelent"],
        Comments : ""
    }

    const Reducer = (state,action) => {
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

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(State);
         Dispatch({
            type : 'RESET'
         })
    }

    const HandleReset = () => {
        Dispatch({
            type : 'RESET'
        })
    }

    const HandleChange = (e) => {
        Dispatch ({
            type : 'UPDATE_FIELD',
            field : e.target.name,
            value : e.target.value,
            types : e.target.type
        })
    }


    const [State , Dispatch] = useReducer(Reducer,InitialState)

    return (
        <>
        <form action="" onSubmit={(e)=>HandleSubmit(e)}>
            <div>
                <label>Fullname</label>
            <input type="text" value={State.FullName} name="FullName" onChange={HandleChange}  required/>
            </div>

            <div>
                <label>Email</label>
            <input type="email" value={State.Email} name="Email" onChange={HandleChange} required/>
            </div>

            <div>
                <label>Review</label>
            <select name="Rating" value={State.Rating} onChange={HandleChange} required>
                {
                    InitialState.Rating.map((item)=>(
                        <>
                        <option value={item}>{item}</option>
                        </>
                    ))
                }
            </select>
            </div>

            <div>
                <textarea name="Comments" value={State.Comments} onChange={HandleChange} required></textarea>
            </div>
            
            <div>
                <button type="submit">submit</button>
                <button onClick={HandleReset}>reset</button>
            </div>
        </form>
        </>
    )
}

export default Feedback;