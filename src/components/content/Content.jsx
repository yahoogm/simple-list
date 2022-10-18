import ItemList from "./item-list/ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return <>{items.length ? <ItemList handleCheck={handleCheck} handleDelete={handleDelete} items={items} /> : <p className="text-red-300 text-center mt-52 font-mono font-semibold">Your list is empty</p>}</>;
};

export default Content;
