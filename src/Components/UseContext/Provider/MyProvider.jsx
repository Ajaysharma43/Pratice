import React ,{ useState } from "react";
import Context from "../../../Context/CreateContext";

const MyProvider = ({ children }) => {

    
  const [sharedValue, setSharedValue] = useState("Hello, World!");

  console.log(sharedValue); 

  return (
    <Context.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </Context.Provider>
  );
};

export default MyProvider;
