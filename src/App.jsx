import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Components/Routes/Routes";
import MyProvider from "./Components/UseContext/Provider/MyProvider";
import MyComponent from "./Components/UseContext/Component/Mycomponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <MyProvider>
        <MyComponent />
      </MyProvider>
    </>
  );
}

export default App;
