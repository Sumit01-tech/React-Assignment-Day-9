import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Redux Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <p>State in string format:</p>
      <pre>{JSON.stringify({ count }, null, 2)}</pre>
    </div>
  );
};

export default Counter;
