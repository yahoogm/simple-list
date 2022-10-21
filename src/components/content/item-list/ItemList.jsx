import React from "react";
import LineItem from "../line-item/LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <table className="text-center w-[70%] mt-10 bg-green-300 m-auto">
      <thead className="bg-green-400 text-white">
        <th>Check</th>
        <th>Text</th>
        <th>Delete</th>
      </thead>
      {items.map((item) => {
        return (
          <tbody>
            <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
          </tbody>
        );
      })}
    </table>
  );
};

export default ItemList;
