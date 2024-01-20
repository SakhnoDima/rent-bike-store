import React from "react";
import { useAllSelectors } from "../../hooks/useAllSelectors";

const textStyle = "font-main font-normal text-sm";
const numberStyle = "font-bold ml-[3px]";

const Statistics: React.FC<{}> = () => {
  const { statistics } = useAllSelectors();

  return (
    <div className="flex flex-col gap-[5px] border-t-[1px] border-[#C4C4C4] pt-[10px]">
      <p className={textStyle}>
        Total Bikes :<span className={numberStyle}>{statistics.totalBike}</span>
      </p>
      <p className={textStyle}>
        Available Bikes :
        <span className={numberStyle}>{statistics.available}</span>
      </p>
      <p className={textStyle}>
        Booked Bikes :<span className={numberStyle}>{statistics.busy}</span>
      </p>
      <p className={textStyle}>
        Average bike cost:
        <span className={numberStyle}>
          {statistics.avg === null ? 0 : statistics.avg?.toFixed(2)}
        </span>{" "}
        UAH/hr.
      </p>
    </div>
  );
};

export default Statistics;
