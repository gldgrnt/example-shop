import { useState, useMemo } from "react";

import { Container } from "components/Container";
import { Header } from "components/Header";
import { TView } from "types/views";
import { BasketProvider } from "state/basket";
import { getProductData } from "helpers/product";

import { Shop } from "./Shop";
import { Basket } from "./Basket";

const App = () => {
  const [view, setView] = useState<TView>("shop");
  const productData = useMemo(() => getProductData(), []);

  return (
    <BasketProvider>
      <Header view={view} setView={setView} />
      <main data-testid="app-main" style={{ padding: "2rem 0" }}>
        <Container>
          {view === "shop" && (
            <Shop productData={productData} setView={setView} />
          )}
          {view === "basket" && (
            <Basket productData={productData} setView={setView} />
          )}
        </Container>
      </main>
      <footer style={{ padding: "1rem 0" }}>
        <Container>&copy; Example Store</Container>
      </footer>
    </BasketProvider>
  );
};

export default App;
