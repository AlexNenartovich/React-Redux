import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Actions/actions";
import { CounterContext } from "../Context/store";
const Counter = () => {
  const context = useContext(CounterContext);
  // console.log(context.add)

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
      <div>{context.num}</div>
      <button onClick={context.add}>Increment</button>
      <button onClick={context.subtract}>Decrement</button>
    </div>
  );
};

export default Counter;
