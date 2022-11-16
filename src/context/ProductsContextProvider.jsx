import { createContext, useEffect, useState} from "react";

export const contexProducts = createContext();

export function ProductsContextProvider({children}) {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    fetch("https://api.escuelajs.co/api/v1/products")
     .then((res) => res.json())
     .then((data) => setProducts(data))
  },[])

  return (
    <contexProducts.Provider value={{products}}>
      {children}
    </contexProducts.Provider>
  )
}
