import { configureStore, Store } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { rootReducer } from "../redux/reducer";

// const customRender = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, "wrapper">,
// ) => {
//   const AllTheProviders: FC = ({ children }) => {
//     return <Provider>{children}</Provider>;
//   };
//   return render(ui, { wrapper: AllTheProviders, ...options });
// };

interface OptionsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialState?: any;
  store?: Store;
}

function customRender(
  ui: ReactElement,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  }: OptionsType = {},
) {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export * from "@testing-library/user-event";
export { customRender as render };
