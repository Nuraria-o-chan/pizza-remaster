import React from "react";

const Categories = () => {
  const [state, setState] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onClickCategoria = (index) => {
    setState(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoria, index) => (
          <li
            onClick={() => onClickCategoria(index)}
            key={index}
            className={state === index ? "active" : ""}
          >
            {categoria}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
