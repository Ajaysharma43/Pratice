import { useReducer } from "react";
import { data } from "react-router-dom";

const Form = () => {

    const InitialState = {
        FirstName : '',
        LastName : '',
        PhoneNo : '',
        Qualifications : ["10th","12th","Graduate"]
}

const ReducerFunc = (state,action) => {
switch(action.type)
    {
        case'UPDATE_FIELD':
        return {
            ...state,
            [action.field] : action.value
        };

         case'RESET':
         return InitialState;
    }
}

const HandelChange = (e) => {
    dispatch({
        type:'UPDATE_FIELD',
        field:e.target.name,
        value:e.target.value,
    })
}

const HandleSubmit = (e) => {
    e.preventDefault()
    console.log("data",state);
    dispatch ({
        type:'RESET'
    })
    
}

    const [state , dispatch] = useReducer(ReducerFunc,InitialState)
  return (
    <>
      <form action="" onSubmit={(e) => HandleSubmit(e)}>
        <div>
          <label htmlFor="name">Username</label>
          <input type="text" value={state.FirstName} name="FirstName" onChange={(e)=>HandelChange(e)}/>

          <label htmlFor="name">Lastname</label>
          <input type="text" value={state.LastName} name="LastName" onChange={(e)=>HandelChange(e)}/>
        </div>

        <div>
          <label htmlFor="Phoneno">Phoneno</label>
          <input type="number" value={state.PhoneNo} name="PhoneNo" onChange={(e)=>HandelChange(e)}/>
        </div>
         
         <select name="Qualifications" onChange={(e)=>HandelChange(e)}>
         <option value="" disabled>
            Select an option
          </option>
            {
                InitialState.Qualifications.map((item)=>(
                    <>
                    <option>{item}</option>
                    </>
                ))
            }
         </select>



        <button type="submit">submit</button>

        <button type="button" onClick={()=> dispatch({ type : 'RESET'})} className="h-[50px] w-[70px] ">reset</button>
      </form>
    </>
  );
};

export default Form;
