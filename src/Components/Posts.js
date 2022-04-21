import React, { useRef, useEffect } from "react";
import { fetchPosts, addPost } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import PostList from "./PostList";
import "./index.css";

export default (props) => {
  const posts = useSelector((state) => state.posts.items);
  console.log(posts);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    titleRef.current.focus();
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
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <br />
      <br />
      <div>
        <PostList data={posts} />
      </div>
    </div>
  );
};
