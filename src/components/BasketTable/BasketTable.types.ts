import { IProduct } from 'types/product';

export interface IBasketTableRow extends Pick<IProduct, 'id' | 'name' | 'unitPrice' | 'getDiscount' | 'getTotalPrice'> {
    quantity: number;
}

export interface IProps {
    rows: IBasketTableRow[];
}