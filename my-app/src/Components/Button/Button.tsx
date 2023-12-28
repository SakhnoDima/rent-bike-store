import React from "react";

export enum ButtonType {
  SUBMIT = "submit",
  BUTTON = "button",
  RESET = "reset",
}

interface IButton {
  type: ButtonType;
  name: string;
}

const Button: React.FC<IButton> = ({ type, name }) => {
  return (
    <button
      className="block w-[235px] bg-bg-prime px-[22px] py-[4px] text-white rounded-[5px]"
      type={type}
    >
      <p className="font-main font-normal text-sm ">{name}</p>
    </button>
  );
};

export default Button;
