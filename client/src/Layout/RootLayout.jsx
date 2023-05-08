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

function cartReducer(tasks, action) {
  if (action.type === "updated") {
    return [...tasks, { details: action.details, count: action.count }];
  }
}

export default RootLayout;
