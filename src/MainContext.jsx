import React, { createContext, useEffect, useState } from "react";
export let cartContext = createContext();
export let cartItamData = createContext();

function MainContext({ children }) {
  const [cart, setCart] = useState(()=>{
    const getCarts = localStorage.getItem("item");
    return getCarts ? JSON.parse(getCarts):0
  });
  const [cartData, setCartData] = useState( ()=>{
    const getValues = localStorage.getItem("carts");
    return getValues ? JSON.parse(getValues):[]
  } ); 

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cart));
  }, [cart]);   

  useEffect(()=>{
    localStorage.setItem("carts",JSON.stringify(cartData))
  },[cartData]) 

  let obj = { cart, setCart };
  return (
    <cartItamData.Provider value={{ cartData, setCartData }}>
      <cartContext.Provider value={obj}>{children}</cartContext.Provider>
    </cartItamData.Provider>
  );
}

export default MainContext;
