import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/navbar";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <Navbar />
      <div className="p-2">
        {isRouteErrorResponse(error)
          ? "This Page does not exist"
          : "An Unexpected error occured"}
      </div>
    </div>
  );
};
