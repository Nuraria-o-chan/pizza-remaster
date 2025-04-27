import React from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const onClickCategoria = (index) => {
    setCategoryID(index);
  };
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://680a96e5d5075a76d9887385.mockapi.io/items?category=" + categoryID
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoryID]);
  return (
    <>
      <div className="content__top">
        <Categories
          categoryID={categoryID}
          onClickCategoria={(index) => onClickCategoria(index)}
        />
        <Sort sort={sort} setSort={(index) => setSort(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((item, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
