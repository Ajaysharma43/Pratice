import { useEffect, useReducer, useState } from "react";
import Addtodo from "./TodoDilogs/Addtodo";
import { DataReducer, DataState } from "../Reducer/TodoReducer";



const Todo = () => {
  const [dialogState, setDialogState] = useState(false);
  const [tododata,settodo] = useState([])
  
  

  const toggleDialog = () => {
    setDialogState((prev) => !prev);
  };

  const [state,reducer] = useReducer(DataState,DataReducer)

  const getdata = () =>{
    console.log(DataState);
  }

  return (
    <>
      <Addtodo open={dialogState} onClose={toggleDialog} getdata={getdata} />
      <div className="space-y-4">
        <table className="table border border-black border-collapse w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black px-4 py-2">Task Title</th>
              <th className="border border-black px-4 py-2">Task</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <button
          onClick={toggleDialog}
          className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default Todo;
