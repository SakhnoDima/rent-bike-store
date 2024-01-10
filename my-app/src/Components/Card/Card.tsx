import React from "react";
import { ReactComponent as CloseBtn } from "../../SVG/Cls.svg";
import Select from "react-select";
import { colorStyles } from "./selectStyles";
import { ICard } from "../../dto/dto";
import { useAppDispatch } from "../../hooks/hooks";
import { removeBike, updateBikeStatus } from "../../redux/bikeThunk";

const options = [
  { value: "available", label: "Available" },
  { value: "busy", label: "Busy" },
  { value: "unavailable", label: "Unavailable" },
];

export const Card: React.FC<ICard> = ({
  name,
  type,
  color,
  id,
  _id,
  status,
  price,
}) => {
  const dispatch = useAppDispatch();

  //? initial styles for selector
  const defaultValueSelect = (() => {
    return options.findIndex((item) => item.value === status);
  })();

  const onCloseClick = () => {
    dispatch(removeBike(_id));
  };

  const handleChange = (selectOptions: any) => {
    const options = { id: _id, status: selectOptions.value };

    dispatch(updateBikeStatus(options));
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
          styles={colorStyles}
        />
      </div>

      <p className="absolute right-[13px] bottom-[12px] font-main font-normal text-2xl">
        {price} UAH/hr.
      </p>
      <button
        onClick={onCloseClick}
        className="absolute right-[12px] top-[12px] hover:scale-150"
      >
        <CloseBtn />
      </button>
    </div>
  );
};
