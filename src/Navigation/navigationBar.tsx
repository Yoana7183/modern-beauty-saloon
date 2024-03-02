import { Link } from "react-router-dom";
import NavigationMenu from "../Navigation/navigationMenu";

export const NavigationBar = () => {
  return (
    <div className=" bg-gray-100 ">
      <NavigationMenu />

      <div className="">
        <Link to="/" className="text-blue-500 hover:underline">
          Back
        </Link>
       
      </div>
    </div>
  );
};
