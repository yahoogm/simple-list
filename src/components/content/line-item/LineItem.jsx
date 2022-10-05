import React from 'react';
import { FaTrash } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li key={item.id} className="space-x-2">
      <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
      <label className={item.checked ? 'text-red-300 line-through' : ''}>{item.item}</label>
      <button onClick={() => handleDelete(item.id)}>
        <FaTrash />
      </button>
    </li>
  );
};

export default LineItem;
