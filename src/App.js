import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import React from 'react';

function App() {
  // Usestate
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
    <div>
      <Header title="Simple List" />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer title="Made by Yahoo Garfield Manik" length={items.length} />
    </div>
  );
}

export default App;
