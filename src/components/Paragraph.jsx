import React from "react";
import { useContext } from "react";
import { contexProducts } from "../context/ProductsContextProvider";

export const Paragraph = () => {
  const {products} = useContext(contexProducts);

  return (
    <>
      <div>Paragraph</div>
      <p>{JSON.stringify(products)}</p>
    </>
  );
};
