import { IBasketTableRow } from "components/BasketTable/BasketTable.types";
import { TBasketItem } from "state/basket/basket.types";
import { IProduct } from "types/product";

export const addProductToBasket = (basket: TBasketItem[], productId: IProduct['id']) => {
    if (!basket.some(item => item.id === productId)) return [...basket, { id: productId, quantity: 1}];
    return basket.map((item) => {
        if (item.id !== productId) return item;
        return { ...item, quantity: item.quantity + 1};
    })
}

export const removeProductFromBasket = (basket: TBasketItem[], productId: IProduct['id']) => {
    if (!basket.some(item => item.id === productId)) return [...basket];
    return basket.map((item) => {
        if (item.id !== productId) return item;
        return { ...item, quantity: item.quantity - 1};
    }).filter(item => item.quantity > 0)
}

export const clearProductFromBasket = (basket: TBasketItem[], productId: IProduct['id']) => {
    if (!basket.some(item => item.id === productId)) return [...basket];
    return basket.filter((item) => item.id !== productId);
}


export const createBasketTableRows = (basket: TBasketItem[], productData: IProduct[]) => {
    return basket.map(item => {
        const product = productData.find(data => data.id === item.id);
        if (!product) return null;

        return {
            ...product,
            quantity: item.quantity
        }
    }).filter(item => item !== null) as IBasketTableRow[];
}