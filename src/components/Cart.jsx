import { useContext } from "react";
import { totalContext } from "../context/TotalContextProvider";

export const Cart = () => {
  const { total, setTotal } = useContext(totalContext);
  return (
    <div className="cart-container">
      <div className="cart">
        <p>Total: $ {total}</p>
        <button onClick={() => setTotal(0)}>Clean</button>
      </div>
    </div>
  );
};
