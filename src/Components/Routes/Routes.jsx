import { useRoutes } from "react-router-dom";
import Form from "../Form/Form";
import Feedback from "../Form/FeedbackForm";
import Todo from "../To_Do_List/Todolist";
import MyComponent from "../UseContext/Component/Mycomponent";
import Pratice from "../../Pages/Pratice/Pratice";
import Ecommerce from "../../Pages/Ecommerce/Ecommerce";

const Routes = () => {
  const Route = useRoutes([
    { element: <Form />, path: "/" },
    { element: <Feedback />, path: "/Feedback" },
    {element : <Todo/>,path:'/Todo'},
    {element:<Pratice/>,path:"/pratice"},
    {element:<Ecommerce/>,path:"/ecommerce"}
  ]);
  return Route;
};

export default Routes;
