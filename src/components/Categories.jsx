import React from "react";

const Categories = ({categoryID, onClickCategoria}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoria, index) => (
          <li
            onClick={() => onClickCategoria(index)}
            key={index}
            className={categoryID === index ? "active" : ""}
          >
            {categoria}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
