import React from "react";
import { Card } from "../Card/Card";

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
