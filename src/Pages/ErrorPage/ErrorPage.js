import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="fs-1">Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className="text-danger">{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
