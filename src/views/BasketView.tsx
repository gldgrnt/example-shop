import { useMemo } from "react";

import { BasketTable } from "components/BasketTable";
import { createBasketTableRows } from "helpers/basket";
import { useBasketContext } from "state/basket";
import { IViewProps } from "types/views";

const BasketView = ({ productData }: IViewProps) => {
  const { state } = useBasketContext();
  const isBasketEmpty = state.length < 1;

  const rows = useMemo(() => {
    return createBasketTableRows(state, productData);
  }, [productData, state]);

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Basket</h2>
      {isBasketEmpty ? <h3>Basket is empty</h3> : <BasketTable rows={rows} />}
    </section>
  );
};

export default BasketView;
