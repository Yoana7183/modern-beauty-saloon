import { Link, useLocation } from "react-router-dom";
import NavigationMenu from "../Navigation/navigationMenu";

export const NavigationBar = () => {
  const location = useLocation();

  return (
    <div className=" bg-gray-100 ">
      <NavigationMenu />
      {location.pathname !== "/" && (
        <div className="">
          <Link to="/" className="text-blue-500 hover:underline">
            Back
          </Link>
        </div>
      )}
    </div>
  );
};
