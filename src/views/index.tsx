import { useState } from "react";

import { Container } from "components/shared/Container";
import { Header } from "components/Header";
import { TView } from "types/views";

import ShopView from "./ShopView";
import BasketView from "./BasketView";

const App = () => {
  const [view, setView] = useState<TView>("shop");

  return (
    <>
      <Header view={view} setView={setView} />
      <main style={{ padding: "2rem 0" }}>
        <Container>
          {view === "shop" && <ShopView />}
          {view === "basket" && <BasketView />}
        </Container>
      </main>
      <footer style={{ padding: "1rem 0" }}>
        <Container>&copy; Example store</Container>
      </footer>
    </>
  );
};

export default App;
