import { createContext, useState, useReducer } from "react";
import { Outlet } from "react-router-dom";

export const cartDataContext = createContext(null);
export const cartDataDispatchContext = createContext(null);

const RootLayout = () => {
  const [tasks, dispatch] = useReducer(cartReducer, []);


  return (
    <cartDataContext.Provider value={tasks}>
      <cartDataDispatchContext.Provider value={dispatch}>
        <Outlet />
      </cartDataDispatchContext.Provider>
    </cartDataContext.Provider>
  );
};
// The reason it wasnt working was because you were mutating tasks instead of just updating it completely, adding
// deletedItemsArray and mutating that instead fixed the problem since you followed the "purity" guidelines
function cartReducer(tasks, action) {
  if (action.type === "updated") {
    return [...tasks, { details: action.details, count: action.count }];
  }else if (action.type === "deleted"){
    const deletedItemsArray = [...tasks]
    const removeItem = deletedItemsArray.findIndex((item) => item.details._id === action.id)
    deletedItemsArray.splice(removeItem, 1)
    console.log(tasks)
    return(
      [...deletedItemsArray] 
    )
  }
}

export default RootLayout;
