import { createHashRouter } from "react-router";
import Home from "./components/Home";
import Casestudy from "./components/Casestudy";
import About from "./components/About";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/casestudy/instituto-universidade-virtual",
    element: <Casestudy />,
  },
]);