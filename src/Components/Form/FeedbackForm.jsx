import { useReducer } from "react";
import { Reducer, InitialState } from "../Reducer/Reducer";

const Feedback = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(State);
    Dispatch({
      type: "RESET",
    });
  };

  const HandleReset = () => {
    Dispatch({
      type: "RESET",
    });
  };

  const HandleChange = (e) => {
    Dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
      types: e.target.type,
    });
  };

  const [State, Dispatch] = useReducer(Reducer, InitialState);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <form
          action=""
          onSubmit={(e) => HandleSubmit(e)}
          className="bg-white rounded-lg shadow-lg p-6 text-black w-[300px] space-y-4"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">Fullname:</label>
            <input
              type="text"
              value={State.FullName}
              name="FullName"
              onChange={HandleChange}
              required
              className="border border-gray-300 rounded-md h-[40px] w-full px-3 focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email:</label>
            <input
              type="email"
              value={State.Email}
              name="Email"
              onChange={HandleChange}
              required
              className="border border-gray-300 rounded-md h-[40px] w-full px-3 focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Review:</label>
            <select
              name="Rating"
              value={State.Rating}
              onChange={HandleChange}
              required
              className="border border-gray-300 rounded-md h-[40px] w-full px-3 focus:ring-2 focus:ring-blue-400 text-black"
            >
              {InitialState.Rating.map((item) => (
                <option
                  key={item}
                  value={item}
                  className="uppercase"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Leave a Comment:
            </label>
            <textarea
              name="Comments"
              value={State.Comments}
              onChange={HandleChange}
              required
              className="border border-gray-300 rounded-md h-[80px] w-full px-3 focus:ring-2 focus:ring-blue-400 text-black"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md h-[40px] w-[100px] hover:bg-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={HandleReset}
              className="bg-yellow-500 text-white rounded-md h-[40px] w-[100px] hover:bg-yellow-600 focus:ring focus:ring-offset-2 focus:ring-yellow-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
