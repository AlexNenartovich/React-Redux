import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Actions/actions";

const Counter = () => {
  const counter = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const incr = () => {
    dispatch(increment());
  };

  const decr = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
    </div>
  );
};

export default Counter;
