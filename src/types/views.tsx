import { IProduct } from "./product";

export type TView = "shop" | "basket";

export interface IViewProps {
  productData: IProduct[];
}
