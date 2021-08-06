// import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { cleanup, render } from "../tests/utils";
import { Counter } from "./index";

afterEach(cleanup);

test("render counter decrement button", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("decrement-btn")).toBeInTheDocument();
});

test("render counter increment button", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("increment-btn")).toBeInTheDocument();
});

test("render counter decrement button with ( - ) label", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("decrement-btn")).toHaveTextContent("-");
});

test("render counter increment button with ( + ) label", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("increment-btn")).toHaveTextContent("+");
});

test("counter decrement button click event decrease from 10 to 9", () => {
  const { getByTestId } = render(<Counter />, {
    initialState: { counter: { value: 10 } },
  });
  userEvent.click(getByTestId("decrement-btn"));
  expect(getByTestId("counter-value")).toHaveValue("9");
});

test("counter increment button click event increase from 5 to 6", () => {
  const { getByTestId } = render(<Counter />, {
    initialState: { counter: { value: 5 } },
  });
  userEvent.click(getByTestId("increment-btn"));
  expect(getByTestId("counter-value")).toHaveValue("6");
});

test("counter increment button click event increase from 15 to 25", () => {
  const { getByTestId } = render(<Counter />, {
    initialState: { counter: { value: 15 } },
  });
  userEvent.click(getByTestId("increment-btn-10"));
  expect(getByTestId("counter-value")).toHaveValue("25");
});

test("render counter value input", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("counter-value")).toBeInTheDocument();
});

test("render initial counter value input is 0", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("counter-value")).toHaveValue("0");
});
