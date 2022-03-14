import { render } from "@testing-library/react";

import { BasketProvider } from "state/basket";

const customRender = (ui, options) =>
  render(ui, { wrapper: BasketProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
