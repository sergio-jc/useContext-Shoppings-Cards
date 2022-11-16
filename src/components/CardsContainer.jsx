import { useContext } from "react";
import { contexProducts } from "../context/ProductsContextProvider";
import { Card } from "./Card";

export const CardsContainer = () => {
  const { products } = useContext(contexProducts);

  return (
    <div className="cardContainer">
      <h1 className="title-app">useContext Shoppings Cards</h1>
      {products.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </div>
  );
};
