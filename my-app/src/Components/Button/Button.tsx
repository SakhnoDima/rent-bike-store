import React from "react";

export enum ButtonType {
  SUBMIT = "submit",
  BUTTON = "button",
  RESET = "reset",
}

interface IButton {
  type: ButtonType;
  name: string;
  prime: boolean;
}

const Button: React.FC<IButton> = ({ type, name, prime = false }) => {
  return (
    <button
      className={`block w-[235px] bg-bg-prime px-[22px] py-[4px] text-white rounded-[5px] ${
        prime ? "mx-auto" : " "
      }
`}
      type={type}
    >
      <p className="font-main font-normal text-sm ">{name}</p>
    </button>
  );
};

export default Button;
