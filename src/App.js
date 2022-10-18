import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddItem from "./components/content/add-item/AddItem";
import Search from "./components/content/search/Search";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect is asyncronous
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItem = await response.json();
        setItems(listItem);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // its just simulation for get data in asyncronous from API
    setTimeout(() => {
      fetchItem();
    }, 2000);
  }, []);

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
    setNewItem("");
  };

  return (
    <div>
      <Header title="Simple List" />
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <Search search={search} setSearch={setSearch} />
      <main className="font-mono">
        {isLoading && <p className="text-center mt-5">Loading Items...</p>}
        {fetchError && <p className="text-red-400 text-center mt-5 ">{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />}
      </main>
      <Footer title="" length={items.length} />
    </div>
  );
}

export default App;
