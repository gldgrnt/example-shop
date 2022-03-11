import data from 'data.json';

import { IProductData, IProduct } from 'types/product';

export const getProductData = (): IProduct[] => {
    return data.map((p: IProductData) => {
        return {
            ...p,
            getTotalPrice: (quantity) => quantity * p.unitPrice,
            getDiscount: (quantity) => {
                if (quantity < p.discountQuantity) return 0;
                const quantityAtDiscount = Math.floor(quantity / p.discountQuantity);
                return quantityAtDiscount * p.discountPrice;
            },
        };
    });
}

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP'}).format(price / 100);
}