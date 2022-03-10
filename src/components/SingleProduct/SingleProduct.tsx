import { Button } from "@mui/material";
import { formatPrice } from "helpers/product";

import { IProps } from "./SingleProduct.types";

const SingleProduct = ({ product }: IProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ textTransform: "capitalize" }}>{product.name}</h3>
      <p style={{ marginTop: 0 }}>Price: {formatPrice(product.price)}</p>
      <Button variant="outlined" onClick={() => console.log("hello")}>
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
