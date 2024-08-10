import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./routes";

export const App = () => {
  return <RouterProvider router={routerConfig} />;
};
