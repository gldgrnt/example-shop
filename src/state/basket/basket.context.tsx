import { createContext, useContext, useReducer } from "react";

import { initialState, reducer } from "./basket.reducer";
import { TBasketContext } from "./basket.types";

const BasketContext = createContext<Partial<TBasketContext>>({});
export const useBasketContext = () =>
  useContext(BasketContext) as TBasketContext;

export const BasketProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};
