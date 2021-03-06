import { useMemo } from "react";
import { Button } from "@mui/material";

import { BasketTable } from "components/BasketTable";
import { ViewContainer } from "components/ViewContainer";
import { createBasketTableRows } from "helpers/basket";
import { useBasketContext } from "state/basket";
import { IViewProps } from "types/views";

const Basket = ({ productData, setView }: IViewProps) => {
  const { state } = useBasketContext();
  const isBasketEmpty = state.length < 1;

  const rows = useMemo(() => {
    return createBasketTableRows(state, productData);
  }, [productData, state]);

  return (
    <ViewContainer title="Basket">
      {isBasketEmpty ? (
        <>
          <p>There are no items in your basket.</p>
          <Button variant="contained" onClick={() => setView("shop")}>
            Back to shop
          </Button>
        </>
      ) : (
        <BasketTable rows={rows} />
      )}
    </ViewContainer>
  );
};

export default Basket;
