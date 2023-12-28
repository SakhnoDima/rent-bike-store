import React from "react";
import { ReactComponent as CloseBtn } from "../../SVG/Cls.svg";
import Select from "react-select";
import { colourStyles } from "./selectStyles";
// enum Status {
//   AVAILABLE = "available",
//   BUSY = "busy",
//   UNAVAILABLE = "unavailable",
// }

const options = [
  { value: "available", label: "Available" },
  { value: "busy", label: "Busy" },
  { value: "unavailable", label: "Unavailable" },
];

interface ICard {
  name: string;
  type: string;
  color: string;
  id: string;
  status: string;
  price: number;
}

export const Card: React.FC<ICard> = ({
  name,
  type,
  color,
  id,
  status,
  price,
}) => {
  const defaultValueSelect = (() => {
    return options.findIndex((item) => item.value === status);
  })();

  const handleChange = (selectOptions: any) => {
    console.log(id, selectOptions);
  };

  return (
    <div
      className={` w-[618px] h-[83px] py-[12px] pl-[18px] pr-[13px] rounded-[10px] bg-gray-color relative
   border-2 ${
     status === "available"
       ? "border-bg-available"
       : status === "busy"
       ? "border-[#F2994A]"
       : "border-[#EB5757]"
   } `}
    >
      <p className="font-main font-bold text-sm text-text-dark mb-[1px]">
        {name} -
        <span className="font-normal">
          {type}({color})
        </span>
      </p>
      <p className="text-text-light font-main font-normal text-[8px] mb-[1px]">
        {id}
      </p>

      <p className="font-main font-normal text-sm text-text-dark ">STATUS:</p>
      <div className="absolute left-[94px] bottom-[4px]">
        <Select
          onChange={handleChange}
          options={options}
          defaultValue={options[defaultValueSelect]}
          styles={colourStyles}
        />
      </div>

      <p className="absolute right-[13px] bottom-[12px] font-main font-normal text-2xl">
        {price} UAH/hr.
      </p>
      <button
        onClick={() => console.log("Close")}
        className="absolute right-[12px] top-[12px] hover:scale-150"
      >
        <CloseBtn />
      </button>
    </div>
  );
};
