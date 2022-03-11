export interface IProductData {
    id: string;
    name: string;
    unitPrice: number;
    quantityNameSingular: string;
    quantityNamePlural: string;
    discountQuantity: number;
    discountPrice: number;
    discountString: string;
}

export interface IProduct extends IProductData {
    getTotalPrice: (quantity: number) => number;
    getDiscount: (quantity: number) => number;
}