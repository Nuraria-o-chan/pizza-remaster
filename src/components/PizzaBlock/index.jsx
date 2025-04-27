import React from "react";
import PIZZA from "../../assets/Img/pizza.jpg";

const PizzaBlock = ({ title, price, sizes, types }) => {
  const [count, setCount] = React.useState(0);
  const [sizess, setSizes] = React.useState(0);
  const [typesState, setTypeState] = React.useState(0);
  const listTypes = ["тонкое", "традиционное"];
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={PIZZA} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setTypeState(typeId)}
              className={typesState === typeId ? "active" : ""}
            >
              {listTypes[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              onClick={() => setSizes(index)}
              className={sizess === index ? "active" : ""}
              key={index}
            >
              {size}см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span onClick={() => setCount(count + 1)}>Добавить</span>
          <i>{count}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
