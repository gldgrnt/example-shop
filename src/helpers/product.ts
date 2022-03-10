import data from 'data.json';

import { IProductData, IProduct } from 'types/product';

export const getProductData = (): IProduct[] => {
    return data.map((p: IProductData) => {
        return {
            ...p,
            getPrice: (quantity) => {
                if (quantity < p.discountQuantity) return p.price * quantity;
                const quantityAtDiscount = Math.floor(quantity / p.discountQuantity);
                const quantityAtBasePrice = quantity - quantityAtDiscount;
                return (quantityAtDiscount * p.discountPrice) + (quantityAtBasePrice * p.price);
            } 
        };
    });
}

export const formatPrice = (price: number): string => {
    if (price < 100) return `${price}p`;
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP'}).format(price / 100);
}