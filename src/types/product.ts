export interface IProductData {
    id: string;
    name: string;
    price: number;
    quantityNameSingular: string;
    quantityNamePlural: string;
    discountQuantity: number;
    discountPrice: number;
    discountString: string;
}

export interface IProduct extends IProductData {
    getPrice: (quantity: number) => number;
}