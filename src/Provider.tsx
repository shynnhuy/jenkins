import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

export const Provider: FC = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
