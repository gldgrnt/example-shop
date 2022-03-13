import { useCallback, useMemo } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

import { IProps } from "./BasketTable.types";
import { formatPrice } from "helpers/product";
import { useBasketContext } from "state/basket";
import { EBasketActions } from "state/basket/basket.types";

const BasketTable = ({ rows }: IProps) => {
  const { dispatch } = useBasketContext();

  const incrementQuanity = useCallback(
    (id: string) =>
      dispatch({ type: EBasketActions.ADD_TO_BASKET, payload: id }),
    [dispatch]
  );
  const decrementQuanity = useCallback(
    (id: string) =>
      dispatch({ type: EBasketActions.REMOVE_FROM_BASKET, payload: id }),
    [dispatch]
  );
  const removeFromBasket = useCallback(
    (id: string) =>
      dispatch({ type: EBasketActions.REMOVE_ALL_FROM_BASKET, payload: id }),
    [dispatch]
  );

  const totalToPay = useMemo(
    () =>
      rows.reduce(
        (sum, product) =>
          sum +
          (product.getTotalPrice(product.quantity) -
            product.getDiscount(product.quantity)),
        0
      ),
    [rows]
  );

  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Total Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((product) => {
            const total = product.getTotalPrice(product.quantity);
            const discount = product.getDiscount(product.quantity);

            return (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => removeFromBasket(product.id)}
                      sx={{ marginRight: "0.5rem" }}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                    <span style={{ textTransform: "capitalize" }}>
                      {product.name} <br /> {formatPrice(product.unitPrice)}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="plus"
                    size="small"
                    onClick={() => decrementQuanity(product.id)}
                  >
                    <RemoveCircle />
                  </IconButton>
                  {product.quantity}
                  <IconButton
                    aria-label="remove"
                    size="small"
                    onClick={() => incrementQuanity(product.id)}
                  >
                    <AddCircle />
                  </IconButton>
                </TableCell>
                <TableCell>{formatPrice(total)}</TableCell>
                <TableCell>{`${discount ? "-" : ""}${formatPrice(
                  discount
                )}`}</TableCell>
                <TableCell>{formatPrice(total - discount)}</TableCell>
              </TableRow>
            );
          })}
          <TableRow sx={{ backgroundColor: "#F4F4F4" }}>
            <TableCell colSpan={3} />
            <TableCell>
              <strong>Total to pay</strong>
            </TableCell>
            <TableCell>
              <strong>{formatPrice(totalToPay)}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasketTable;
