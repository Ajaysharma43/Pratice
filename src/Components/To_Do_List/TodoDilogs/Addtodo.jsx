import { Dialog, DialogContent } from "@mui/material";
import { useReducer } from "react";
import { InitialState, Reducer } from "../../Reducer/Addtodoreducer";

const Addtodo = ({ open, onClose, dispatch, getdata }) => {
  const [state, localDispatch] = useReducer(Reducer, InitialState);

  const HandleChange = (e) => {
    localDispatch({
      type: "UPDATE_TODO",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the new task to the parent state
    dispatch({
      type: "ADD_TASK",
      payload: state,
    });

    // Reset local state
    localDispatch({
      type: "RESET",
    });

    // Optional: Trigger any additional effects or logs
    getdata();

    // Close the dialog
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <form action="" onSubmit={HandleSubmit} className="space-y-4">
          <div>
            <label htmlFor="taskTitle" className="block mb-2 font-medium">
              Task Title
            </label>
            <input
              id="taskTitle"
              type="text"
              value={state.Taskname}
              name="Taskname"
              onChange={HandleChange}
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
