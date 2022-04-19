import React, { useState, useEffect } from "react";
import { increment, decrement, fetchPosts } from "./Actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default (props) => {
  const counter = useSelector((state) => state.counter.number);
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const incr = () => {
    dispatch(increment());
  };

  const decr = () => {
    dispatch(decrement());
  };

  const res = posts.map((post) => (
    <div>
      <h2>{post.title}</h2>
    </div>
  ));

  return (
    <div>
      <div>{counter}</div>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <div>{res}</div>
    </div>
  );
};
