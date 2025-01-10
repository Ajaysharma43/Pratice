import { useContext } from "react";
import Context from "../../../Context/CreateContext";

const MyComponent = () => {
  const { sharedValue, setSharedValue } = useContext(Context);

  const handleUpdate = () => {
    setSharedValue("This is updated!");
  };

  return (
    <>
    {/* <div>
      <p>Shared Value: {sharedValue}</p>
      <button onClick={()=>handleUpdate()}>Update Value</button>
    </div> */}
    </>
  );
};

export default MyComponent;