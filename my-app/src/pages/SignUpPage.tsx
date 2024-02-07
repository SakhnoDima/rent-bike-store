import React from "react";
import { AuthorizationForm } from "../Components/Forms/AuthorizationForm";
import { Link } from "react-router-dom";

export const SignUpPage: React.FC = () => {
  return (
    <div className="h-[300px] mx-auto my-[160px] p-[40px] border border-gray-color">
      <h2 className="mb-[16px] font-poppins text-2xl font-medium">
        Create your account
      </h2>
      <p
        className="mb-[16px] font-poppins text-sm font-light
      "
      >
        Already have an account?
        <Link
          className="ml-[8px] font-poppins text-sm font-light
      text-darkGray-color hover:underline"
          to={"/signin"}
        >
          log in
        </Link>
      </p>

      <AuthorizationForm action={"register"} />
    </div>
  );
};
