import { Stack, Button } from "@mui/material";

import { IProps } from "./Header.types";

import { Container } from "components/shared/Container";
import { useBasketContext } from "state/basket";
import { useMemo } from "react";

const Header = ({ view, setView }: IProps) => {
  const { state } = useBasketContext();

  const basketQuantity = useMemo(() => {
    if (state.length < 1) return 0;
    return state.reduce((total, item) => total + item.quantity, 0);
  }, [state]);

  return (
    <header style={{ padding: "1rem 0" }}>
      <Container>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            disabled={view === "shop"}
            onClick={() => setView("shop")}
          >
            Shop
          </Button>
          <Button
            variant="contained"
            disabled={view === "basket"}
            onClick={() => setView("basket")}
          >
            Basket ({basketQuantity})
          </Button>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
