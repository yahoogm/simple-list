import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddItem from './components/content/add-item/AddItem';
import Search from './components/content/search/Search';
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shop')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  // useEffect is asyncronous
  useEffect(() => {
    localStorage.setItem('shop', JSON.stringify(items));
    console.log(localStorage);
  }, [items]);

  // Function to add new Item
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  // Function to handle check
  const handleCheck = (id) => {
    const listItem = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItem);
  };

  // Function to delete items
  const handleDelete = (id) => {
    const delItem = items.filter((item) => item.id !== id);
    setItems(delItem);
    console.log(delItem);
  };

  // Function do handle submit items
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <Header title="Simple List" />
      <Search search={search} setSearch={setSearch} />
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <Content items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer title="Made by Yahoo Garfield Manik" length={items.length} />
    </div>
  );
}

export default App;
