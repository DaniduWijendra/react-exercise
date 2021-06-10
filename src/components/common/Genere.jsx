import React from "react";
const Genere = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "list-group-item active"
              : "list-group-item "
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
Genere.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};
export default Genere;
