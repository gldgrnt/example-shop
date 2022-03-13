import { useMemo } from "react";

import { BasketTable } from "components/BasketTable";
import { createBasketTableRows } from "helpers/basket";
import { useBasketContext } from "state/basket";
import { IViewProps } from "types/views";
import { Button } from "@mui/material";

const BasketView = ({ productData, setView }: IViewProps) => {
  const { state } = useBasketContext();
  const isBasketEmpty = state.length < 1;

  const rows = useMemo(() => {
    return createBasketTableRows(state, productData);
  }, [productData, state]);

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Basket</h2>
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
    </section>
  );
};

export default BasketView;
