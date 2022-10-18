import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form className="flex items-center justify-center mt-20 space-x-2" onSubmit={handleSubmit}>
      <input autoFocus id="addItem" type="text" placeholder="Add Item" required className="bg-green-300 rounded p-2 font-mono placeholder:text-white" value={newItem} onChange={(e) => setNewItem(e.target.value)} ref={inputRef} />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()} />
      </button>
    </form>
  );
};

export default AddItem;
