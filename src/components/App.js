import React, { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import PakingList from "./PakingList";

const App = () => {
  const [items, setItems] = useState([]);
  const onAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };
  const onDeleteItem = (delItem) => {
    setItems((items) => items.filter((item) => item.id !== delItem));
  };
  const onCheckItem = (checkId) => {
    setItems((items) =>
      items.map((item) =>
        item.id === checkId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearListHanling = () => {
    const comfirmed = window.confirm(
      "Are you sure!, You want to clear below Lists"
    );
    if (comfirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={onAddItem} />
      <PakingList
        items={items}
        onDeleteItem={onDeleteItem}
        onCheckItem={onCheckItem}
        clearListHanling={clearListHanling}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
