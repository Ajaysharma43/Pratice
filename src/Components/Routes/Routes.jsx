import { useRoutes } from "react-router-dom";
import Form from "../Form/Form";
import Feedback from "../Form/FeedbackForm";

const Routes = () => {
  const Route = useRoutes([
    { element: <Form />, path: "/" },
    { element: <Feedback />, path: "/Feedback" },
  ]);
  return Route;
};

export default Routes;
