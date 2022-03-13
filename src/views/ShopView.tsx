import { SingleProduct } from "components/SingleProduct";
import { ViewContainer } from "components/shared/ViewContainer";
import { IViewProps } from "types/views";

const ShopView = ({ productData }: IViewProps) => {
  return (
    <ViewContainer title="Shop">
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gridGap: "2rem",
          padding: "0",
          margin: "0",
        }}
      >
        {productData.map((product) => (
          <li key={product.id} style={{ listStyle: "none" }}>
            <SingleProduct product={product} />
          </li>
        ))}
      </ul>
    </ViewContainer>
  );
};

export default ShopView;
