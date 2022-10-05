import ItemList from './item-list/ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return <main>{items.length ? <ItemList handleCheck={handleCheck} handleDelete={handleDelete} items={items} /> : <p className="text-red-300 text-center mt-52">Your list is empty</p>}</main>;
};

export default Content;
