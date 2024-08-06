import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { HomeScreen } from "./pages/Home/Home";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={routerConfig} />;
};
