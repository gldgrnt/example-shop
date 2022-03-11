import { IProduct } from "types/product";

export enum EBasketActions {
    'ADD_TO_BASKET',
    'REMOVE_FROM_BASKET',
    'REMOVE_ALL_FROM_BASKET'
}

export interface IBasketAction {
    type: EBasketActions;
    payload:  IProduct['id'];
}

export type TBasketItem = { 
    id: IProduct['id'];
    quantity: number;
}

export type TBasketContext = {
    state: TBasketItem[];
    dispatch: React.Dispatch<IBasketAction>;
}