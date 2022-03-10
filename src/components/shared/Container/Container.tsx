import MuiContainer from "@mui/material/Container";

const Container: React.FC = ({ children }) => {
  return <MuiContainer maxWidth="lg">{children}</MuiContainer>;
};

export default Container;
