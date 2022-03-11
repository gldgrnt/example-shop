import { addProductToBasket, clearProductFromBasket, removeProductFromBasket } from "helpers/basket";
import { EBasketActions, IBasketAction, TBasketItem } from "./basket.types";

export const initialState: TBasketItem[] = [];

export const reducer = (state = initialState, action: IBasketAction) => {
    switch(action.type) {
        case EBasketActions.ADD_TO_BASKET:
            return addProductToBasket(state, action.payload);

        case EBasketActions.REMOVE_FROM_BASKET:
            return removeProductFromBasket(state, action.payload);

        case EBasketActions.REMOVE_ALL_FROM_BASKET:
            return clearProductFromBasket(state, action.payload);

        default:
            return state;
    }
}