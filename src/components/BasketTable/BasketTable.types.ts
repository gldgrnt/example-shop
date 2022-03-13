import { IProduct } from 'types/product';

export interface IBasketTableRow extends Omit<IProduct, 'discountQuantity' | 'discountPrice' | 'discountString'> {
    quantity: number;
}

export interface IProps {
    rows: IBasketTableRow[];
}