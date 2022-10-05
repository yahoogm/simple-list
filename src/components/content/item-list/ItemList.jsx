import React from 'react';
import LineItem from '../line-item/LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="flex-col text-center mt-20 w-full items-center">
      {items.map((item) => {
        return <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />;
      })}
    </ul>
  );
};

export default ItemList;
