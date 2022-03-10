import { createContext, useContext, useReducer } from "react";

import { initialState, reducer } from "./basket.reducer";

const BasketContext = createContext({});
export const useBasketContext = () => useContext(BasketContext);

export const BasketProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};
