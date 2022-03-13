import { Stack, Button } from "@mui/material";

import { IProps } from "./Header.types";

import { Container } from "components/Container";
import { useBasketContext } from "state/basket";
import { useMemo } from "react";

const Header = ({ view, setView }: IProps) => {
  const { state } = useBasketContext();

  const basketQuantity = useMemo(() => {
    if (state.length < 1) return 0;
    return state.reduce((total, item) => total + item.quantity, 0);
  }, [state]);

  const basketQuantityLabel = basketQuantity
    ? `${basketQuantity} items in your basket.`
    : "There are no items in your basket.";

  return (
    <header style={{ padding: "1rem 0" }}>
      <Container>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            disabled={view === "shop"}
            onClick={() => setView("shop")}
            aria-label="View the shop"
          >
            Shop
          </Button>
          <Button
            variant="contained"
            disabled={view === "basket"}
            onClick={() => setView("basket")}
            aria-label={`View your basket. ${basketQuantityLabel}`}
          >
            Basket {view === "shop" && `(${basketQuantity})`}
          </Button>
          <span className="sr-only" aria-live="polite">
            {basketQuantityLabel}
          </span>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
