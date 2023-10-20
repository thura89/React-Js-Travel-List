import React, { useState } from "react";
import Item from "./Item";

const PakingList = ({ items, onDeleteItem, onCheckItem, clearListHanling }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul className="">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
      {items.length > 0 ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed</option>
          </select>
          <button onClick={() => clearListHanling()}>Clear List</button>
        </div>
      ) : (
        ``
      )}
    </div>
  );
};

export default PakingList;
