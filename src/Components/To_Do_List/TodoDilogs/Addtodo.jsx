import { Dialog, DialogContent } from "@mui/material";
import { InitialState, Reducer } from "../../Reducer/Addtodoreducer";
import { DataReducer, DataState } from "../../Reducer/TodoReducer";
import { useReducer, useState } from "react";
import { data } from "react-router-dom";

const Addtodo = ({ open, onClose, getdata }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  const [datastate, DataReduce] = useReducer(DataReducer, DataState);

  const HandleChange = (e) => {
    dispatch({
      type: "UPDATE_TODO",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
      e.preventDefault();
      console.log(state);
      DataReduce({
        type: "ADD_TASK",
        payload: state,
      });

      datastate.push[state]
console.log(datastate);

      dispatch({
        type: "RESET",
      });
      console.log(DataState);
      
      getdata()
    };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <form action="" onSubmit={(e) => HandleSubmit(e)} className="space-y-4">
          <div>
            <label htmlFor="taskTitle" className="block mb-2 font-medium">
              Task Title
            </label>
            <input
              id="taskTitle"
              type="text"
              value={state.Taskname}
              name="Taskname"
              onChange={(e) => HandleChange(e)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="task" className="block mb-2 font-medium">
              Task
            </label>
            <input
              id="task"
              type="text"
              value={state.Task}
              name="Task"
              onChange={HandleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Addtodo;
