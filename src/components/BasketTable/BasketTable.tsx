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
      rows?.reduce(
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
      <Table size="small" aria-label="Your basket">
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
          {rows?.map((product) => {
            const total = product.getTotalPrice(product.quantity);
            const discount = product.getDiscount(product.quantity);

            return (
              <TableRow key={product.id} data-testid={`${product.id}-row`}>
                <TableCell component="th" scope="row">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ textTransform: "capitalize", order: 2 }}>
                      {product.name} <br /> {formatPrice(product.unitPrice)}
                    </span>
                    <IconButton
                      aria-label={`Delete ${product.name} from your basket`}
                      size="small"
                      onClick={() => removeFromBasket(product.id)}
                      sx={{ marginRight: "0.5rem", order: 1 }}
                      data-testid={`${product.id}-delete`}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label={`Remove 1 ${product.quantityNameSingular}`}
                    size="small"
                    onClick={() => decrementQuanity(product.id)}
                    data-testid={`${product.id}-decrement`}
                  >
                    <RemoveCircle />
                  </IconButton>
                  <span data-testid={`${product.id}-quantity`}>
                    {product.quantity}
                  </span>
                  <IconButton
                    aria-label={`Add another ${product.quantityNameSingular}`}
                    size="small"
                    onClick={() => incrementQuanity(product.id)}
                    data-testid={`${product.id}-increment`}
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
          <TableRow style={{ backgroundColor: "#F4F4F4" }}>
            <TableCell colSpan={4}>
              <strong>Total to pay:</strong>
            </TableCell>
            <TableCell aria-live="polite" data-testid="basket-table-total">
              <strong>{formatPrice(totalToPay)}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasketTable;
