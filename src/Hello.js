import React, { useRef, useEffect } from "react";
import { increment, decrement, fetchPosts, addPost } from "./Actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default (props) => {
  const counter = useSelector((state) => state.counter.number);
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const incr = () => {
    dispatch(increment());
  };

  const decr = () => {
    dispatch(decrement());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      body: bodyRef.current.value
    };
    //  console.log(data);
    dispatch(addPost(data));
    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  const res = posts.map((post) => (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
    </div>
  ));

  return (
    <div>
      <div>{counter}</div>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <br />
      <br />
      <div>
        <input ref={titleRef} type="text" placeholder="Title" />
      </div>
      <br />
      <div>
        <input ref={bodyRef} type="text" placeholder="Body" />
      </div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div>{res}</div>
    </div>
  );
};
