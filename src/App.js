import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddItem from './components/content/add-item/AddItem';
import Search from './components/content/search/Search';
import { useState } from 'react';
import React from 'react';

function App() {
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

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  // Function to add new Item
  const addItem = (item) => {
    const myNewItem = { id: Date.now(), checked: false, item };
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
