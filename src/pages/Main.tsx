import { Outlet } from "react-router";
import { NavigationBar } from "../Navigation/navigationBar";
import { Footer } from "./Footer";


export const BeautySaloon = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer/>
    </div>
  );
};
