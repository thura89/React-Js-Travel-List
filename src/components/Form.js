import React, { useState } from "react";

const Form = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    setQuantity(1);
    setDescription("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <h3>What do you need for your trip !</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item.."
        value={description}
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
