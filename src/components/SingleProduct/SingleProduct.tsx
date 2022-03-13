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
    <article
      aria-label={product.name}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textTransform: "capitalize",
          marginTop: 0,
          fontSize: "1.25rem",
        }}
      >
        {product.name}
      </h2>
      <p style={{ marginTop: 0 }}>Price: {formatPrice(product.unitPrice)}</p>
      <details
        open
        style={{
          padding: "0.5rem",
          backgroundColor: "#F3F3F3",
          marginBottom: "1rem",
        }}
      >
        <summary style={{ display: "block" }}>
          <strong style={{ textTransform: "capitalize", marginBottom: 0 }}>
            {product.name} deal
          </strong>
        </summary>
        <p style={{ marginTop: "0.5rem", marginBottom: 0 }}>
          {product.discountString}
        </p>
      </details>
      <Button
        variant="outlined"
        onClick={addToBasket}
        aria-label={`Add 1 ${product.quantityNameSingular} to your basket`}
      >
        Add to basket
      </Button>
    </article>
  );
};

export default SingleProduct;
