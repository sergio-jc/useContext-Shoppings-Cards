import { useContext } from "react";
import { totalContext } from "../context/TotalContextProvider";

export const Card = ({ price, title, images }) => {
  const { setTotal, total } = useContext(totalContext);
  return (
    <div className="card">
      <img className="card-img" src={images[0]} alt="image" />
      <p className="product-name">{title}</p>
      <div className="priceContainer">
        <p className="price">$ {price}</p>
        <button onClick={() => setTotal(total + price)}>Add to cart</button>
      </div>
    </div>
  );
};
