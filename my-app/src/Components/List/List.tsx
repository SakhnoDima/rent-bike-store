import React, { useEffect } from "react";
import { Card } from "../Card/Card";
import { getBikesList } from "../../redux/bikeThunk";
import { useAppDispatch } from "../../hooks/hooks";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import { sortArr } from "../../helpers";

const List: React.FC<{}> = () => {
  const { bikesList, isLoading, formError } = useAllSelectors();

  const dispatch = useAppDispatch();

  const sortedBikeList = sortArr(bikesList);

  useEffect(() => {
    dispatch(getBikesList());
  }, [dispatch]);

  return (
    <>
      {formError ? <p>{formError}</p> : null}
      {isLoading ? (
        <p className=" w-[618px] text-center">Loading...</p>
      ) : sortedBikeList.length > 0 ? (
        <div className="flex flex-col gap-[12px]">
          {sortedBikeList?.map(
            ({ name, type, color, id, status, price, _id }) => (
              <Card
                key={_id}
                name={name}
                type={type}
                color={color}
                id={id}
                _id={_id}
                status={status}
                price={price}
              />
            )
          )}
        </div>
      ) : (
        <p className={` w-[618px] text-center`}>Pleas add your firs bike</p>
      )}
    </>
  );
};

export default List;
