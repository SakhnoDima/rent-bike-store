import React from "react";

const infoStatistics = {
  total: 0,
  available: 0,
  booked: 0,
  average: 0,
};

const textStyle = "font-main font-normal text-sm";

const Statistics: React.FC<{}> = () => {
  return (
    <div className="p-[10px] flex flex-col gap-[5px]">
      <p className="font-main font-bold text-lg">STATISTICS</p>
      <p className={textStyle}>
        Total Bikes : <span className="font-bold">{infoStatistics.total}</span>
      </p>
      <p className={textStyle}>
        Available Bikes :{" "}
        <span className="font-bold">{infoStatistics.available}</span>
      </p>
      <p className={textStyle}>
        Booked Bikes :{" "}
        <span className="font-bold">{infoStatistics.booked}</span>
      </p>
      <p className={textStyle}>
        Average bike cost:{" "}
        <span className="font-bold">{infoStatistics.average.toFixed(2)}</span>{" "}
        UAH/hr.
      </p>
    </div>
  );
};

export default Statistics;
