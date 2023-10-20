import React from "react";

const Stats = ({ items }) => {
  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numpacked / numitems) * 100);
  if (numitems === 0) {
    return (
      <footer className="stats">
        <em>Please add Item you wish</em>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        {percentage == 100
          ? `you ready to go your trip`
          : `You have ${numitems} items on your List , and you already packed ${numpacked} (% ${percentage})`}
      </em>
    </footer>
  );
};
export default Stats;
