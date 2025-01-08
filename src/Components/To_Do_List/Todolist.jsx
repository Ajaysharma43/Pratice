import { useState } from "react";
import Addtodo from "./TodoDilogs/Addtodo";

const Todo = () => {
  const [dialogState, setDialogState] = useState(false);

  const toggleDialog = () => {
    setDialogState((prev) => !prev);
  };

  return (
    <>
      <Addtodo open={dialogState} onClose={toggleDialog} />
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
