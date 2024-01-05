import React, { useEffect } from "react";
import { Card } from "../Card/Card";
import { getBikesList } from "../../redux/bikeThunk";
import { useAppDispatch } from "../../hooks/hooks";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import { sortArr } from "../../helpers";

const List: React.FC<{}> = () => {
  const { bikesList, isLoading } = useAllSelectors();
  const dispatch = useAppDispatch();

  const sortedBikeList = sortArr(bikesList);

  useEffect(() => {
    dispatch(getBikesList());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p className=" w-[618px] text-center">Loading...</p>
      ) : (
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
      )}
    </>
  );
};

export default List;
