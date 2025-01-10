import { useRoutes } from "react-router-dom";
import Form from "../Form/Form";
import Feedback from "../Form/FeedbackForm";
import Todo from "../To_Do_List/Todolist";
import MyComponent from "../UseContext/Component/Mycomponent";
import Pratice from "../../Pages/Pratice/Pratice";
import Ecommerce from "../../Pages/Ecommerce/Homepage/Ecommerce";
import Product from "../Ecomerce/Product/Product";

const Routes = () => {
  const Route = useRoutes([
    { element: <Form />, path: "/" },
    { element: <Feedback />, path: "/Feedback" },
    {element : <Todo/>,path:'/Todo'},
    {element:<Pratice/>,path:"/pratice"},
    {element:<Ecommerce/>,path:"/ecommerce"},
    {element:<Product/>,path:"/product/:slug"}
  ]);
  return Route;
};

export default Routes;
