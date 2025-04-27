import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://680a96e5d5075a76d9887385.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza, index) => (
              <PizzaBlock key={index} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
