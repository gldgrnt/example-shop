import { SingleProduct } from "components/SingleProduct";
import { IViewProps } from "types/views";

const ShopView = ({ productData }: IViewProps) => {
  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gridGap: "2rem",
        }}
      >
        {productData.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ShopView;
