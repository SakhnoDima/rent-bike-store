import React, { useEffect } from "react";
import { Card } from "../Card/Card";
import { RootState } from "../../redux/store";
import { getBikesList } from "../../redux/bikeThunk";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const list = [
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw",
    status: "busy",
    price: 200,
  },
  {
    name: "Lesik2",
    type: "Ogon",
    color: "red",
    id: "1212qwqw12",
    status: "available",
    price: 300,
  },
  {
    name: "Lesik3",
    type: "Metalolom",
    color: "Gamno",
    id: "1212qwqw123",
    status: "unavailable",
    price: 100,
  },
];

const List: React.FC<{}> = () => {
  const count = useAppSelector((state: RootState) => state.bikes.list);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBikesList);
    console.log(count);
  }, [count, dispatch]);

  return (
    <div className="flex flex-col gap-[12px]">
      {list.map(({ name, type, color, id, status, price }) => (
        <Card
          key={id}
          name={name}
          type={type}
          color={color}
          id={id}
          status={status}
          price={price}
        />
      ))}
    </div>
  );
};

export default List;
