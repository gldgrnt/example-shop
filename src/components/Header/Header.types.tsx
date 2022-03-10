import { TView } from "types/views";

export interface IProps {
  view: TView;
  setView: (view: TView) => void;
}
