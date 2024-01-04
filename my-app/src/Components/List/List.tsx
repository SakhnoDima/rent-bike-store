import React, { useEffect } from "react";
import { Card } from "../Card/Card";
import { getBikesList } from "../../redux/bikeThunk";
import { useAppDispatch } from "../../hooks/hooks";
import { useAllSelectors } from "../../hooks/useAllSelectors";

const List: React.FC<{}> = () => {
  const { bikesList, isLoading } = useAllSelectors();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBikesList());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p className=" w-[618px] text-center">Loading...</p>
      ) : (
        <div className="flex flex-col gap-[12px]">
          {bikesList?.map(({ name, type, color, id, status, price, _id }) => (
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
          ))}
        </div>
      )}
    </>
  );
};

export default List;
