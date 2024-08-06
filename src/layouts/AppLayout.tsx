import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <h1>Root Layout</h1>
      <Outlet />
    </div>
  );
};
