import { Button } from "@mui/material";
import { formatPrice } from "helpers/product";
import { useCallback } from "react";
import { useBasketContext } from "state/basket";
import { EBasketActions } from "state/basket/basket.types";

import { IProps } from "./SingleProduct.types";

const SingleProduct = ({ product }: IProps) => {
  const { dispatch } = useBasketContext();

  const addToBasket = useCallback(() => {
    dispatch({ type: EBasketActions.ADD_TO_BASKET, payload: product.id });
  }, [dispatch, product.id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ textTransform: "capitalize" }}>{product.name}</h3>
      <p style={{ marginTop: 0 }}>Price: {formatPrice(product.unitPrice)}</p>
      <Button variant="outlined" onClick={addToBasket}>
        Add to basket
      </Button>
      <p style={{ padding: "1rem", backgroundColor: "#F3F3F3" }}>
        <strong style={{ display: "block", marginBottom: "0.5rem" }}>
          Discount
        </strong>
        <em>{product.discountString}</em>
      </p>
    </div>
  );
};

export default SingleProduct;
