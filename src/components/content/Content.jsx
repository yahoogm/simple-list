import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'item 1',
    },
    {
      id: 2,
      checked: false,
      item: 'item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'item 3',
    },
  ]);

  //   Function to handle check
  const handleCheck = (id) => {
    const listItem = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItem);
  };

  const handleDelete = (id) => {
    const delItem = items.filter((item) => item.id !== id);
    setItems(delItem);
    console.log(delItem);
  };

  return (
    <main>
      {items.length ? (
        <ul className="flex flex-col items-center mt-20">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
                <label className={item.checked ? 'text-red-300 line-through' : ''}>{item.item}</label>
                <FaTrash onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-red-300 text-center mt-52">Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
