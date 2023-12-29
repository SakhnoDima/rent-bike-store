import React from "react";

const infoStatistics = {
  total: 0,
  available: 0,
  booked: 0,
  average: 0,
};

const textStyle = "font-main font-normal text-sm";
const numberStyle = "font-bold ml-[3px]";

const Statistics: React.FC<{}> = () => {
  return (
    <div className="flex flex-col gap-[5px] border-t-[1px] border-[#C4C4C4] pt-[10px]">
      <p className={textStyle}>
        Total Bikes :<span className={numberStyle}>{infoStatistics.total}</span>
      </p>
      <p className={textStyle}>
        Available Bikes :
        <span className={numberStyle}>{infoStatistics.available}</span>
      </p>
      <p className={textStyle}>
        Booked Bikes :
        <span className={numberStyle}>{infoStatistics.booked}</span>
      </p>
      <p className={textStyle}>
        Average bike cost:
        <span className={numberStyle}>
          {infoStatistics.average.toFixed(2)}
        </span>{" "}
        UAH/hr.
      </p>
    </div>
  );
};

export default Statistics;
