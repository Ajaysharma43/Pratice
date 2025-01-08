import { useRoutes } from "react-router-dom";
import Form from "../Form/Form";
import Feedback from "../Form/FeedbackForm";
import Todo from "../To_Do_List/Todolist";

const Routes = () => {
  const Route = useRoutes([
    { element: <Form />, path: "/" },
    { element: <Feedback />, path: "/Feedback" },
    {element : <Todo/>,path:'/Todo'}
  ]);
  return Route;
};

export default Routes;
