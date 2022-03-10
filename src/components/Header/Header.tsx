import { Stack, Button } from "@mui/material";

import { IProps } from "./Header.types";

import { Container } from "components/shared/Container";

const Header = ({ view, setView }: IProps) => {
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
            Basket (0)
          </Button>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
