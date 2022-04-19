import React from "react";
import { increment } from "./Actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default (props) => {
  const counter = useSelector((state) => state.number);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={onClick}>Increment</button>
      <button onClick={onClick}>Decrement</button>
    </div>
  );
};
