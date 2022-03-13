import { IProps } from "./ViewContainer.types";

const ViewContainer: React.FC<IProps> = ({ title, children }) => {
  return (
    <section>
      <h1 aria-live="assertive" style={{ marginTop: 0 }}>
        <span className="sr-only">Navigated to</span>
        {title}
      </h1>
      {children}
    </section>
  );
};

export default ViewContainer;
