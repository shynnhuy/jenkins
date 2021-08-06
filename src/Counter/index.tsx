import { useAppDispatch, useAppSelector } from "~redux/hooks";
import { decrement, increment, incrementByAmount } from "./slice";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button data-testid="decrement-btn" onClick={() => dispatch(decrement())}>
        -
      </button>
      <input
        data-testid="counter-value"
        value={count}
        style={{ width: "20px", textAlign: "center" }}
        disabled
      />
      <button data-testid="increment-btn" onClick={() => dispatch(increment())}>
        +
      </button>
      <button
        data-testid="increment-btn-5"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
      <button
        data-testid="increment-btn-10"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        +10
      </button>
    </div>
  );
};
