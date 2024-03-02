import { Outlet } from "react-router";
import { NavigationBar } from "../Navigation/navigationBar";
import { HomePage } from "./Home";

export const BeautySaloon = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <HomePage/>
    </div>
  );
};
