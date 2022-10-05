import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form className="flex items-center justify-center mt-20 space-x-3" onSubmit={handleSubmit}>
      <label htmlFor="addForm">Add Item</label>
      <input autoFocus id="addItem" type="text" placeholder="Add Item" required className="bg-green-300 rounded" value={newItem} onChange={(e) => setNewItem(e.target.value)} ref={inputRef} />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
