import React, { useRef, useEffect } from "react";
import { fetchPosts, addPost } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import PostList from "./PostList";
import "./index.css";

export default (props) => {
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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

  return (
    <div className="post-container">
      <div>
        <input ref={titleRef} type="text" placeholder="Title" />
      </div>
      <br />
      <div>
        <input ref={bodyRef} type="text" placeholder="Body" />
      </div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <PostList data={posts} />
      </div>
    </div>
  );
};
