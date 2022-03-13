import { useState, useMemo } from "react";

import { Container } from "components/shared/Container";
import { Header } from "components/Header";
import { TView } from "types/views";
import { BasketProvider } from "state/basket";

import ShopView from "./ShopView";
import BasketView from "./BasketView";
import { getProductData } from "helpers/product";

const App = () => {
  const [view, setView] = useState<TView>("shop");
  const productData = useMemo(() => getProductData(), []);

  return (
    <BasketProvider>
      <Header view={view} setView={setView} />
      <main style={{ padding: "2rem 0" }}>
        <Container>
          {view === "shop" && (
            <ShopView productData={productData} setView={setView} />
          )}
          {view === "basket" && (
            <BasketView productData={productData} setView={setView} />
          )}
        </Container>
      </main>
      <footer style={{ padding: "1rem 0" }}>
        <Container>&copy; Example store</Container>
      </footer>
    </BasketProvider>
  );
};

export default App;
