import React from "react";
import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
      </td>
      <td>
        <label className={item.checked ? "text-red-300 line-through" : ""}>{item.item}</label>
      </td>
      <td>
        <button onClick={() => handleDelete(item.id)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default LineItem;
