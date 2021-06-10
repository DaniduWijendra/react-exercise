import React from "react";
import Counter from "./Counter";

const Counters = ({
  onReset,
  onDelete,
  onIncrement,
  counters,
  onDecrement,
}) => {
  console.log("counters rendered");
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-lg m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
