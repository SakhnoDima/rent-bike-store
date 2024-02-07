import React from "react";
import { Link } from "react-router-dom";
import { AuthorizationForm } from "../Components/Forms/AuthorizationForm";

export const SignInPage: React.FC = () => {
  return (
    <div className="h-[300px] mx-auto my-[160px] p-[40px] border border-gray-color">
      <h2 className="mb-[16px] font-poppins text-2xl font-medium">
        Log in your account
      </h2>
      <p
        className="mb-[16px] font-poppins text-sm font-light
      "
      >
        Don't have account?
        <Link
          className="ml-[8px] font-poppins text-sm font-light
      text-darkGray-color hover:underline"
          to={"/signup"}
        >
          Register
        </Link>
      </p>

      <AuthorizationForm action={"login"} />
    </div>
  );
};
