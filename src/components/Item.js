import React from "react";

const Item = ({ item, onDeleteItem, onCheckItem }) => {
  return (
    <li>
      <input
        id={item.id}
        type="checkbox"
        onChange={() => onCheckItem(item.id)}
      />
      <label
        htmlFor={item.id}
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.description} - {item.quantity}
      </label>
      <button
        style={{ color: "red", fontSize: "50px" }}
        onClick={() => onDeleteItem(item.id)}
      >
        &times;
      </button>
    </li>
  );
};
export default Item;
